<template>
    <v-card class="bottom-rounded">
        <v-card-row>
            <v-spacer></v-spacer>
            <router-link class="btn btn--dark btn--flat blue--text" to="/main">
                {{$root.$data.exit}}
            </router-link>
        </v-card-row>
        <v-card-row>
            <v-progress-linear class="pa-0 pl-5 pr-5 mr-5 ml-5" v-model="progressValue"
            ></v-progress-linear>
        </v-card-row>
        <v-card-row>
            <v-slide-x-transition mode="out-in">
                <router-view :correct="correct" :content="content"></router-view>
            </v-slide-x-transition>
        </v-card-row>

        <!--FOOTER AFTER CHECKED-->
        <v-card-row v-if="correct!=null" class="lighten-4 bottom-rounded" :class="(correct)?'green':'red'">
            <v-btn floating class="white elevation-0 ml-4">
                <v-icon v-if="correct" x-large class="green--text">done</v-icon>
                <v-icon x-large class="red--text" v-else>close</v-icon>
            </v-btn>
            <div class="mt-4 mb-4">
                <v-card-title class="ma-0 pa-0 ml-4" :class="(correct)?'green--text':'red--text'">
                    <b> {{correct ? $root.$data.right : $root.$data.correctAnswerIs}}</b>
                </v-card-title>
                <v-card-text class="ma-0 pa-0 ml-4" v-if="!correct">{{correctAnswer}}</v-card-text>
            </div>
            <v-spacer></v-spacer>
            <v-btn large class="mr-5" success light round v-on:click.native="goNext()">{{$root.$data.next}}</v-btn>
        </v-card-row>
    </v-card>
</template>
<script>
    export default {
        data() {
            return {
                answered: 0,
                progressGame: 0,
                correctAnswer: null,
                generalContent: null,
                correct: null,
                games: null,
                audio: null,
                itemProgress: 0
            }
        },
        methods: {
            goNext() {
                if (this.correct == true) {
                    // REMOVE FIRST
                    this.games.splice(0, 1);
                } else {
                    // FIRST MOVE TO END
                    let first = this.games[0];
                    this.games.splice(0, 1);
                    this.games.push(first);
                }
                this.correct = null;
                if (this.games.length != 0) {
                    this.$router.push(this.games[0]);
                } else {
                    this.$router.push({name: 'res'});
                }
            },
            shuffle: function (a) {
                var j, x, i;
                for (i = a.length; i; i--) {
                    j = Math.floor(Math.random() * i);
                    x = a[i - 1];
                    a[i - 1] = a[j];
                    a[j] = x;
                }
                return a;
            },
            getGamePlan() {
                let array = new Array();
                if (this.generalContent.words)
                    this.generalContent.words.forEach((item, index) => {
                        array.push({name: 'rad', params: {id: index}});
                    });

                if (this.generalContent.inputs)
                    this.generalContent.inputs.forEach((item, index) => {
                        array.push({name: 'inp', params: {id: index}});
                    });

                if (this.generalContent.sentences)
                    this.generalContent.sentences.forEach((item, index) => {
                        array.push({name: 'sent', params: {id: index}});
                    });

                if (this.generalContent.listens && this.$store.state.soundEar)
                    this.generalContent.listens.forEach((item, index) => {
                        array.push({name: 'list', params: {id: index}});
                    });

                if (this.generalContent.multi)
                    this.generalContent.multi.forEach((item, index) => {
                        array.push({name: 'multi', params: {id: index}});
                    });

                this.shuffle(array);
                return array;
            }
        },
        computed: {
            content() {
                if (this.games.length == 0) return null;
                console.log("games: ", this.games[0]);
                let {name} = this.games[0];
                switch (name) {
                    case 'rad':
                        let selectedWords = this.games[0].params.selectedWords;
                        let filteredWords = (!selectedWords) ? this.generalContent.words : this.generalContent.words.filter((item, index) => {
                            if (selectedWords.includes(index)) return item;
                        });
                        return filteredWords;
//                        return filteredWords.filter((item, index) => {
//                            if (index < 4) return item;
//                        });
                    case 'inp':
                        return this.generalContent.inputs;
                    case 'sent':
                        let selectedSentences = this.games[0].params.selectedSentences;
                        return (!selectedSentences) ? this.generalContent.sentences : this.generalContent.sentences.filter((item, index) => {
                            if (selectedSentences.includes(index)) return item;
                        });
                    case 'list':
                        return this.generalContent.listens;
                    case 'multi':
                        return this.generalContent.multi;
                    default:
                        return null;
                }
            },
            progressValue() {
                return this.answered * this.itemProgress;
            }
        },
        mounted() {
            console.log("GAME mounted");
        },
        created() {
            console.log("GAME created");
            this.$on('result', (val, correctAnswer = null, userAnswer = null, task) => {
                this.progressGame++;
                this.correct = val;
                switch (val) {
                    case true:
                        this.answered++;
                        this.audio = new Audio();
                        this.audio.src = "src/assets/sfx/true_sound.mp3";
                        if (this.$store.state.soundEffects == true) this.audio.play();
                        break;
                    case false:
                        if (correctAnswer) {
                            this.correctAnswer = correctAnswer;
                        }
                        this.audio = new Audio();
                        this.audio.src = "src/assets/sfx/error_sound.mp3";
                        if (this.$store.state.soundEffects == true) this.audio.play();
                        break;
                    default:
                        break;
                }

                if (userAnswer) {
                    this.$store.state.game.job.push(
                        {
                            task: task,
                            userAnswer: userAnswer,
                            correctAnswer: correctAnswer,
                            victory: this.correct
                        });
                }

            });

            if (!this.$route.params.content) {
//                this.generalContent = {
//                    multies: [
//                        {
//                            task: "В моей комнате есть кровать, книжная полка, стол, стул.",
//                            right: ["Менің бөлмемде төсек, кітап сөресі, үстел, орындық бар."],
//                            wrong: ["Менің бөлмемде дәптер, кітап, қалам бар.", "Менің бөлмемде ойыншық, үстел, орындық бар."]
//                        },
//                        {
//                            task: "2 В моей комнате есть кровать, книжная полка, стол, стул.",
//                            right: ["Right1"],
//                            wrong: ["Wrong1", "Wrong2"]
//                        },
//                        {
//                            task: "3 В моей комнате есть кровать, книжная полка, стол, стул.",
//                            right: ["Right1", "Right2"],
//                            wrong: ["Wrong1"]
//                        }
//                    ]
//                };
//                this.games = [
//                    {name: 'multi', params: {id: 1}},
//                    {name: 'multi', params: {id: 0}},
//                    {name: 'multi', params: {id: 2}},
//                ];
            } else {
                this.generalContent = this.$route.params.content;
                if (this.generalContent.games) {
                    this.games = this.generalContent.games.slice();
                } else {
                    this.games = this.getGamePlan();
                }
            }
            this.progressGame = 0;
            this.correctAnswer = null;
            this.correct = null;
            this.$store.state.game.size = this.games.length;
            this.$store.state.game.job = new Array();
            this.itemProgress = 100 / this.games.length;
            let gameStart = this.games[0];
            this.$router.push('/game/' + gameStart.name + "/" + gameStart.params.id);
        },
        destroyed() {
            console.log("GAME destroyed");
        },
    }
</script>
<style>
    .bottom-rounded {
        max-width: 900px;
        width:100% !important;
        border-radius: 0 0 20px 20px;
    }

    .maincard {
        width: 100%;
    }
</style>