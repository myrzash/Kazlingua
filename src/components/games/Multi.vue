<template>
    <div class="maincard">
        <v-container fluid>
            <v-card-text class="text-md-center">
                <h4>{{$root.$data.selectAllCorrects}}</h4>
            </v-card-text>
            <v-layout row wrap>

                <v-flex xs12 sm4 md4>
                </v-flex>

                <v-flex xs12 sm8 offset-sm2>
                    <v-card-title>{{current.task}}</v-card-title>
                    <v-checkbox
                            class="ma-0 ml-3"
                            v-if="variants"
                            v-for="item in variants" :label="item" :value="item"
                            v-model="answer"
                            :class="[correct==true?'success--text':'',correct==false?'error--text':'']"
                            :disabled="correct!=null"></v-checkbox>
                    <!--<p>{{ answer }}=={{current.right}}=>{{correct}}</p>-->
                    <!--<p>wrong: {{ current.wrong }} - right:{{current.right}}</p>-->
                </v-flex>
            </v-layout>
        </v-container>
        <!--DEFAULT FOOTER-->
        <v-card-row v-if="correct==null" class="grey lighten-2 bottom-rounded">
            <v-btn primary large light class="ma-3 ml-5" round @click.native="onClickSkip()">{{$root.$data.skip}}
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn large class="ma-3 mr-5" round :disabled="answer==null || answer==''" @click.native="onClickCheck()">
                {{$root.$data.check}}
            </v-btn>
        </v-card-row>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                answer: [],
                current: null,
                audio: null
            }
        },
        computed: {
            variants() {
                let variants = this.current.wrong.concat(this.current.right);
                variants = this.$parent.shuffle(variants);
                return variants;
            }
        },
        props: ['correct', 'content'],
        methods: {
            onClickCheck: function () {
                this.onClickSound();
                this.correct = this.compareArrays(this.answer, this.current.right);//this.current.right == this.answer;
                this.$parent.$emit('result', this.correct, this.current.right.join('; '), this.answer.join('; '), this.$root.$data.selectAllCorrects);
            },
            onClickSkip: function () {
                this.onClickSound();
                this.$parent.$emit('result', false, this.current.right.join('; '));
            },
            onClickSound() {
                if (this.audio) {
                    this.audio.pause();
                    this.audio.currentTime = 0;
                    if (this.$store.state.soundEffects == true)
                        this.audio.play();
                }
            },
            compareArrays(a, b) {
                if (a.length != b.length) return false;
                let c = a.slice().sort();
                let d = b.slice().sort();
                return !c.some(function (e, i) {
                    return e != d[i];
                });
            }
        },
        watch: {
            '$route.params.id'() {
                this.current = this.content[this.$route.params.id];
                console.log("Multi $route changed ", this.$route);
            },
            correct(val) {
                if (val == null) this.answer = [];
            }
        },
        created: function () {
//            this.current = multi;
            this.current = this.content[this.$route.params.id];
            console.log("Multi created: ", this.$route);
//            this.currentWord = this.content[this.$route.params.id];
        },
        destroyed() {
            if (this.audio)
                this.audio.pause();
            console.log("Multi destroyed");
        }
    }
</script>