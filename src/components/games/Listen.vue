<template>
    <div class="maincard">
        <v-container fluid>
            <v-card-text class="text-md-center">
                <h4>{{$root.$data.inputListen}}</h4>
            </v-card-text>
            <v-layout>

                <v-flex xs12 sm6 offset-sm3>
                    <div class="container-voices">
                        <v-btn floating large primary @click.native="onClickSound()">
                            <v-icon light>hearing</v-icon>
                        </v-btn>
                        <v-btn floating primary @click.native="onClickSoundSlowly()">
                            <v-icon light>audiotrack</v-icon>
                            <!--explicit ,audiotrack ,high_quality-->
                        </v-btn>
                    </div>
                    <v-card-row>
                        <v-text-field class="textfield"
                                      :label="$root.$data.inputOnKZ"
                                      v-model="sentence"
                                      :disabled="correct!=null"
                                      @keyup.native.enter="onClickCheck"
                                      full-width
                                      multi-line
                                      single-line
                        ></v-text-field>
                    </v-card-row>
                </v-flex>

            </v-layout>


        </v-container>
        <!--DEFAULT FOOTER-->
        <v-card-row v-if="correct==null" class="grey lighten-2 bottom-rounded">
            <v-btn primary large light class="ma-3 ml-5" round @click.native="onClickSkip()">{{$root.$data.skip}}
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn large class="ma-3 mr-5" round :disabled="sentence==null || sentence==''"
                   @click.native="onClickCheck()">
                {{$root.$data.check}}
            </v-btn>
        </v-card-row>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                sentence: null,
                currentSentence: null,
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
                this.correct = this.validationInputs(this.currentSentence.kz, this.sentence);
                this.$parent.$emit('result', this.correct, this.currentSentence.kz, this.sentence, this.$root.$data.inputListen);
                this.onClickSound();
            },
            onClickSkip: function () {
                this.onClickSound();
                this.$parent.$emit('result', false, this.currentSentence.kz);
            },
            validationInputs(val1, val2) {
                val1 = val1.trim().toLowerCase();
                val1 = this.removeMoreSpace(val1);
                val2 = val2.trim().toLowerCase();
                val2 = this.removeMoreSpace(val2);
                if (val1 != val2) return false;
                return true;
            },
            onClickSound() {
                this.audio.pause();
                this.audio.currentTime = 0;
                this.audio.playbackRate = 1;
//                if(this.$store.state.soundEffects==true)
                this.audio.play();
            },
            onClickSoundSlowly() {
                this.audio.pause();
                this.audio.currentTime = 0;
                this.audio.playbackRate = 0.5;
//                if(this.$store.state.soundEffects==true)
                this.audio.play();
            },
        },
        watch: {
            '$route.params.id'() {
                this.currentSentence = this.content[this.$route.params.id];
            },

            currentSentence(val) {
                this.audio = new Audio();
                this.audio.src = "src/assets/sounds/" + val.sound;
                this.audio.play();
            },
            correct(val) {
                if (val == null) this.sentence = null;
            }
        },

        created: function () {
            this.currentSentence = this.content[this.$route.params.id];
            console.log("Listen created: ", this.currentSentence);
        },

        destroyed() {
            this.audio.pause();
            console.log("Sentence destroyed");
        }
    }
</script>
<style>
    .container-voices {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
</style>