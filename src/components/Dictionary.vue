<template>
    <div class="text-xs-center">
        <v-toolbar style="background: #009ed6;">
            <v-spacer></v-spacer>
            <v-text-field prepend-icon="search"
                          :label="$root.$data.search"
                          v-model="query"
                          hide-details single-line light></v-text-field>
            <v-spacer></v-spacer>
        </v-toolbar>


        <v-layout v-if="loading" column align-center>
            <v-progress-circular indeterminate v-bind:size="50"
                                 class="primary--text ma-4"></v-progress-circular>
            <!--<v-progress-linear v-bind:indeterminate="true"></v-progress-linear>-->
        </v-layout>

        <h5 v-if="filteredWords!=null && filteredWords.length==0" class="text-xs-center pt-4 mt-4">
            {{$root.$data.notFound}}</h5>

        <v-layout wrap style="display:flex; flex-direction: row; justify-content: center;">
            <v-card v-if="filteredWords!=null && filteredWords.length>0" v-for="item in filteredWords" class="ma-3 pt-3"
                    height="320px"
                    style="width:260px; position: relative;text-align:center; overflow: hidden; border-radius: 16px; ">

                <!--<v-card-title class="pb-0">Title</v-card-title>-->
                <!--<v-subheader>Subheader</v-subheader>-->
                <!--<h5>456</h5>-->
                <p class="headline">{{item.kz}}</p>
                <p class="title  secondary--text">{{item.ru}}</p>
                <!--<div>-->
                <img v-if="item.image" width="200" alt="ошибка загрузки" :src="'src/assets/images/base/'+item.image"/>
                <!--</div>-->

                <v-btn v-if="item.sound" style="position:absolute; left:0; bottom:0;" floating small warning
                       @click.native="onClickSoundSlowly(item.sound)">
                    <v-icon>slow_motion_video</v-icon>
                    <!--explicit ,audiotrack ,high_quality-->
                </v-btn>

                <v-btn v-if="item.sound" style="position:absolute; right:0; bottom:0;" floating small
                       class="light-blue"
                       @click.native="onClickSound(item.sound)">
                    <v-icon light>hearing</v-icon>
                </v-btn>

            </v-card>

        </v-layout>
    </div>
</template>


<script>
    //    import parts from '../data/parts2'

    let words = new Array();
    parts.forEach((item) => {
        item.contents.forEach((content) => {
            if (content.words) {
                content.words.forEach((word) => {
//                    if(!words.contains(word))
                    words.push(word);
                });
            }
//                words = words.concat(content.words);
        });
    });

    words = words.filter((elem, index, self) => {
        return self.findIndex((t) => {
            return t.kz.trim().toLowerCase() === elem.kz.trim().toLowerCase();
        }) === index;
    });
    //    words.sort(function (a, b) {
    //        return a.kz > b.kz;
    //    });

    export default {
        data() {
            return {
                audio: null,
                words: null,
                loading: null,
                query: '',
                msg: 'NOT LOADED',
            }
        },
        computed: {
            filteredWords() {
                if (this.query == '') return this.words;

                return this.words.filter((item) => {

//                    var exist = item.kz.trim().toLowerCase().startsWith(this.query.trim().toLowerCase());
//                    var exist2 = item.kz.trim().toLowerCase().endsWith(this.query.trim().toLowerCase());
//                    if (exist || exist2) return item;

                    if (item.kz.trim().toLowerCase().match(this.query.trim().toLowerCase()))
                        return item;
                });
            }
        },
        methods: {
            onClickSound(snd) {
                if (snd) {
                    this.audio = new Audio();
                    this.audio.playbackRate = 1;
                    this.audio.src = "src/assets/sounds/" + snd;
                    this.audio.play();
                }
            },
            onClickSoundSlowly(snd) {
                if (snd) {
                    this.audio = new Audio();
                    this.audio.src = "src/assets/sounds/" + snd;
                    this.audio.playbackRate = 0.5;
                    this.audio.play();
                }
            },
        },
        created() {
            this.loading = true;
            setTimeout(() => {
                this.loading = false;
                this.words = words;
            }, 1000);
        },
        destroyed() {
            console.log("GAME destroyed");
            if (this.audio)
                this.audio.pause();
        },
    }
</script>