<template>
    <div class="maincard">
        <v-container fluid>
            <v-card-text class="text-md-center">
                <h4>{{$root.$data.translateTheSentence}}</h4>
            </v-card-text>
            <v-layout>
                <v-flex xs12 sm6 offset-sm3>
                    <v-card-row>
                        <v-btn floating primary @click.native="onClickSound()" :disabled="correct==null">
                            <v-icon light>hearing</v-icon>
                        </v-btn>
                        <v-card-title>{{trim(currentSentence.ru)}}</v-card-title>
                    </v-card-row>
                    <div class="sentence-place">
                        <v-layout class="mt-3 mb-3" row-sm column wrap><!-- child-flex-sm-->
                            <v-btn class="btn-sentence" :disabled="correct!=null" v-for="item in sentence"
                                   @click.native="removeWord(item)">{{item}}
                            </v-btn>
                        </v-layout>
                    </div>
                    <v-divider light></v-divider>
                </v-flex>
            </v-layout>
            <v-layout class="variants-place">
                <v-flex sm10 offset-sm1 class="text-md-center pt-3">
                    <v-btn class="btn-sentence" :disabled="correct!=null" v-for="item in variants"
                           @click.native="addWord(item)">{{item}}
                    </v-btn>
                </v-flex>
            </v-layout>

        </v-container>
        <!--DEFAULT FOOTER-->
        <v-card-row v-if="correct==null" class="grey lighten-2 bottom-rounded">
            <v-btn primary large light class="ma-3 ml-5" round @click.native="onClickSkip()">{{$root.$data.skip}}
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn large class="ma-3 mr-5" round :disabled="sentence==null" @click.native="onClickCheck()">
                {{$root.$data.check}}
            </v-btn>
        </v-card-row>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                currentSentence: null,
                sentence: null,
                audio: null,
                variants: null,
            }
        },
        props: ['correct', 'content'],
        methods: {
            trim(string) {
                this.removeMoreSpace(string);
                let lastChar = string.charAt(string.length - 1);
                if (lastChar != '?' && lastChar != '.' && lastChar != '!') string += '.';
                return string;
            },
            removeMoreSpace(string) {
                string = string.trim();
                string = string.replace(/  +/g, ' ');
                return string;
            },
            onClickCheck: function () {
                this.correct = this.currentSentence.kz == this.sentence.join(' ');
                this.$parent.$emit('result', this.correct, this.currentSentence.kz, this.sentence.join(' '), this.$root.$data.translateTheSentence);
                this.onClickSound();
            },
            onClickSkip: function () {
                this.$parent.$emit('result', false, this.currentSentence.kz);
            },
            addWord(val) {
                if (!this.sentence) this.sentence = new Array();
                this.sentence.push(val);
                this.variants.splice(this.variants.indexOf(val), 1);
            },
            removeWord(val) {
                this.variants.push(val);
                this.sentence.splice(this.sentence.indexOf(val), 1);
            },
            onClickSound() {
                this.audio.pause();
                this.audio.currentTime = 0;
                if (this.$store.state.soundEffects == true)
                    this.audio.play();
            },
            getVariants(content) {
                let arr = new Array();
//                OnLY THIS VARIANT
                arr = this.currentSentence.kz.split(' ');
//                WITH ANOTHER CONtENTS
//                content.forEach((item) => {
//                    arr.push(item.kz);
//                });
//                arr = arr.join(' ').split(' ').filter((thing, index, self) => self.findIndex((t) => {
//                    return t == thing
//                }) === index);
                arr = this.$parent.shuffle(arr);
                return arr;
            }
        },
        watch: {
            '$route.params.id'() {
                console.log("Sentence $route changed ", this.$route);
                this.currentSentence = this.content[this.$route.params.id];
                this.currentSentence.kz = this.removeMoreSpace(this.currentSentence.kz);
                this.currentSentence.ru = this.removeMoreSpace(this.currentSentence.ru);
            },
            correct(val) {
                if (val == null) {
//                    this.sentence.forEach((item) => {
//                        this.variants.push(item);
//                    });
                    this.variants = this.getVariants(this.content);
                    this.sentence = null;
                }
            },
            currentSentence(val) {
                if (val && val.sound) {
                    this.audio = new Audio();
                    this.audio.src = "src/assets/sounds/" + val.sound;
                }
            }
        },
        created: function () {
            console.log("created Sentence");
            this.currentSentence = this.content[this.$route.params.id];
            this.currentSentence.kz = this.removeMoreSpace(this.currentSentence.kz);
            this.currentSentence.ru = this.removeMoreSpace(this.currentSentence.ru);

            this.variants = this.getVariants(this.content);
        },
        destroyed() {
            this.audio.pause();
            console.log("Sentence destroyed");
        }
    }
</script>
<style>
    .btn-sentence {
        min-width: inherit;
    }

    .sentence-place {
        min-height: 140px;
    }

    .variants-place {
        min-height: 60px;
    }
</style>