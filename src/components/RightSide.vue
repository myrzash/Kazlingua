<template>
    <v-card class="text-xs-center" flat>
        <!--{{$store.state.keySettings}}-->
        <!--{{quantityCompletedWords}} / {{quantityWords}}-->
        <!--{{countAllLessons}} - {{countCompletedLessons}} - {{this.$store.getters.levelParent}} . {{$store.getters.levelChild}}-->
        <!--<div class="pa-3">-->
        <!--<FabMenu class="mb-4"></FabMenu>-->
        <v-container>
            <h6 style="display: inline-block;">Ежедневная цель</h6>
            <v-btn icon @click.native="onClickGoal()">
                <v-icon>settings</v-icon>
            </v-btn>

        </v-container>

        <v-progress-circular
                v-bind:size="160"
                v-bind:width="15"
                v-bind:rotate="-90"
                v-bind:value="percentageGoal"
                class="orange--text"
        >
            <div>
                <h3 class="orange--text ma-0 pa-0 pt-4">{{score}}/{{goal}}</h3>
                <!--<h5>4564</h5>-->
                <!--<h6>4564</h6>-->
                <!--<v-subheader class="ma-0">4564</v-subheader>-->
                <v-subheader>опыта получено</v-subheader>
            </div>
        </v-progress-circular>
        <!--<p class="subheading">пройденных занятий</p>-->
        <v-divider class="mt-3 mb-3"></v-divider>
        <v-progress-circular
                v-bind:size="160"
                v-bind:width="15"
                v-bind:rotate="-90"
                v-bind:value="percentageLessons"
                class="primary--text"
        >
            <div>
                <h3 class="primary--text ma-0 pa-0  pt-2">{{countCompletedLessons}}</h3>
                <!--<h5>4564</h5>-->
                <!--<h6>4564</h6>-->
                <!--<v-subheader class="ma-0">4564</v-subheader>-->
                <v-subheader>пройденных занятий</v-subheader>
            </div>
        </v-progress-circular>
        <v-divider class="mt-3 mb-3"></v-divider>
        <v-progress-circular
                v-bind:size="160"
                v-bind:width="15"
                v-bind:rotate="-90"
                v-bind:value="percentageWords"
                class="purple--text"
        >
            <div>
                <h3 class="purple--text ma-0 pa-0  pt-2">{{quantityCompletedWords}}</h3>
                <!--<h5>4564</h5>-->
                <!--<h6>4564</h6>-->
                <!--<v-subheader class="ma-0">4564</v-subheader>-->
                <v-subheader>изученных слов</v-subheader>
            </div>
        </v-progress-circular>
    </v-card>
</template>

<script>

    export default {
        data() {
            return {
                countAllLessons: 0,
                countCompletedLessons: 0,
                quantityWords: 0,
                quantityCompletedWords: 0,
            }
        },
        computed: {
            goal() {
                return this.$store.state.goal;
            },
            score() {
                return this.$store.state.score;
            },
            percentageGoal() {
                if (this.goal == 0) return 0;
                return this.score / this.goal * 100;
            },
            percentageLessons() {
                if (this.countAllLessons == 0) return 0;
                return this.countCompletedLessons / this.countAllLessons * 100;
            },
            percentageWords() {
                if (this.quantityWords == 0) return 0;
                return this.quantityCompletedWords / this.quantityWords * 100;
            }
        },
        mounted() {
            let count = 0;
            let completed = 0;
            let quantityWords = 0;
            let quantityCompletedWords = 0;
            let parent = this.$store.getters.levelParent;
            let child = this.$store.getters.levelChild;
            this.$parent.parts.forEach((item, index) => {
                count += item.contents.length;
                if (parent > index) {
                    completed += item.contents.length;
                } else if (parent == index) {
                    completed += child;
                }

                item.contents.forEach((content, index2) => {
                    if (content.words) {
                        quantityWords += content.words.length;
//                        console.log("parent = ", parent, ", index = ", index);
                        if ((parent > index) || (parent == index && child > index2)) {
                            quantityCompletedWords += content.words.length;
                        }
                    }
                });
            });
            this.countAllLessons = count;
            this.countCompletedLessons = completed;
            this.quantityWords = quantityWords;
            this.quantityCompletedWords = quantityCompletedWords;
        },
        methods: {
            onClickGoal() {
                this.$router.push('/settings');
            }
        }
//        components: {
//            FabMenu
//        },
//        beforeDestroy() {
//            clearInterval(this.interval)
//        },
//        mounted() {
//            this.interval = setInterval(() => {
//                if (this.percentageGoal === 100) {
//                    return (this.percentageGoal = 0)
//                }
//                this.percentageGoal += 1
//            }, 1000)
//        }
    }
</script>