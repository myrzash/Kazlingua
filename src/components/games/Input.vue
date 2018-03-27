<template>
    <div class="maincard">
        <v-container fluid>
            <v-card-text class="text-md-center">
                <h4>{{$root.$data.translateTheWord}}</h4>
            </v-card-text>
            <v-layout row wrap>
                <v-flex xs5>
                    <v-text-field class="textfield"
                                  :value="currentWord.ru"
                                  disabled
                                  full-width
                                  multi-line
                                  single-line
                    ></v-text-field>
                </v-flex>
                <v-icon x-large dark class="blue--text">navigate_next</v-icon>
                <v-flex xs6>
                    <v-text-field class="textfield"
                                  :label="$root.$data.inputOnKZ"
                                  v-model="answer"
                                  :disabled="correct!=null"
                                  @keyup.native.enter="onClickCheck"
                                  full-width
                                  multi-line
                                  single-line
                    ></v-text-field>
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

    import strings from '../../data/strings';

    export default {
        data() {
            return {
                answer: null,
                currentWord: null,
                audio: null,
            }
        },
        props: ['correct', 'content'],
        methods: {
            removeMoreSpace(string) {
                string = string.trim();
                string = string.replace(/  +/g, ' ');
                return string;
            },
            onClickCheck: function () {
                this.onClickSound();
                this.correct = this.removeMoreSpace(this.currentWord.kz).toLowerCase() == this.removeMoreSpace(this.answer).toLowerCase();
                this.$parent.$emit('result', this.correct, this.currentWord.kz.trim(), this.answer, this.$root.$data.translateTheWord);
            },
            onClickSkip: function () {
                this.onClickSound();
                this.$parent.$emit('result', false, this.currentWord.kz);
            },
            onClickSound() {
                if (this.audio) {
                    this.audio.pause();
                    this.audio.currentTime = 0;
                    if (this.$store.state.soundEffects == true)
                        this.audio.play();
                }
            }
        },
        watch: {
            '$route.params.id'() {
                this.currentWord = this.content[this.$route.params.id];
            },
            correct(val) {
                if (val == null) this.answer = null;
            },
            currentWord(val) {
                if (val.sound) {
                    this.audio = new Audio();
                    this.audio.src = "src/assets/sounds/" + val.sound;
                }
            }
        },
        created: function () {
            console.log("Radio created: ", this.$route);
            this.currentWord = this.content[this.$route.params.id];
        }
    }
</script>
<style>

    .textfield textarea {
        font-size: 24px;
        color: black !important;
        resize: none;
    }

    .textfield label {
        font-size: 24px;
        height: 100%;
    }
</style>