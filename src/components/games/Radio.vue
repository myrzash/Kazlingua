<template>
    <div class="maincard">
        <!--{{content}}-->
        <v-container fluid>
            <v-card-text class="text-md-center">
                <h4 v-if="currentWord.ru">{{$root.$data.selectTheTranslateTheWord}} "{{currentWord.ru}}"</h4>
            </v-card-text>
            <v-layout wrap style="display:flex; flex-direction: row; justify-content: center;">

                <v-card v-for="item in shuffledContent" class="radiocard elevation-1 pa-2 ma-2"
                >
                    <img v-if="item.image" :src="'src/assets/images/base/'+item.image" alt="">
                    <v-radio :disabled="correct!=null" class="mradio" :label="item.kz" v-model="selected"
                             :value="item.kz" dark></v-radio>
                </v-card>

                <!--<v-flex xs3 v-for="item in shuffledContent">-->
                    <!--<v-card class="radiocard elevation-1 pa-3 ma-1">-->
                        <!--<img v-if="item.image" :src="'src/assets/images/base/'+item.image" alt="">-->
                        <!--<v-radio :disabled="correct!=null" class="mradio" :label="item.kz" v-model="selected"-->
                                 <!--:value="item.kz" dark></v-radio>-->
                    <!--</v-card>-->
                <!--</v-flex>-->
            </v-layout>

        </v-container>
        <!--DEFAULT FOOTER-->
        <v-card-row v-if="correct==null" class="grey lighten-2 bottom-rounded">
            <v-btn primary large light class="ma-3 ml-5" round @click.native="onClickSkip()">{{$root.$data.skip}}
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn large class="ma-3 mr-5" round :disabled="selected==null" @click.native="onClickCheck()">
                {{$root.$data.check}}
            </v-btn>
        </v-card-row>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                selected: null,
                currentWord: null,
                audio: null,
            }
        },
        props: ['correct', 'content'],
        methods: {
            onClickCheck: function () {

                this.correct = this.currentWord.kz == this.selected;

                if (this.correct != true) this.onClickSound(this.currentWord.sound);

                this.$parent.$emit('result', this.correct, this.currentWord.kz, this.selected, this.$root.$data.selectTheTranslateTheWord);
            },
            onClickSkip: function () {
                this.onClickSound(this.currentWord.sound);
                this.$parent.$emit('result', false, this.currentWord.kz);
            },
            onClickSound(soundName) {
                if (this.correct == true) return;
                this.audio = new Audio();
                this.audio.src = "src/assets/sounds/" + soundName;
                if (this.$store.state.soundEffects == true)
                    this.audio.play();
            }
        },
        computed: {
            shuffledContent() {
                let newContent = this.content.filter((item, index) => {
                    if (index != this.$route.params.id)
                        return item;
                });
                newContent.unshift(this.content[this.$route.params.id]);
                return this.$parent.shuffle(newContent.filter((item, index) => {
                    if (index < 4)
                        return item
                }));
            }
        },
        watch: {
            '$route.params.id'() {
                console.log("Radio $route changed ", this.$route);
                this.currentWord = this.content[this.$route.params.id];
            },
            correct(val) {
                if (val == null) this.selected = null;
            },
            selected(val) {
                console.log("selected: ", val);
                if (val == null) return;
                var obj = this.content.filter((item) => {
                    if (item.kz == val) return item;
                });
                if (obj[0] && obj[0].sound) {
                    this.onClickSound(obj[0].sound);
                }
            }
        },
        created: function () {
            this.currentWord = this.content[this.$route.params.id];
            console.log("Radio created: ", this.$route);
        }
    }
</script>
<style>
    .radiocard {
        width: 200px;
        height: 240px !important;
        display: flex;
        flex-direction: column;
        border-radius: 10px;
    }

    .radiocard img {
        width: 100%;
    }

    .radiocard > .mradio {
        bottom: -10px;
        margin: 0;
        position: absolute;
    }

</style>