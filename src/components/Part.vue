<template>
    <v-container class="pa-0">
        <div style="position: absolute; right:100%; top:0;" class="mr-2">
            <v-btn floating :style="{background: partColor}" @click.native="$router.push('/main')">
                <v-icon light>arrow_back</v-icon>
            </v-btn>
        </div>

        <v-card class="ml-2 elevation-">
            <v-layout class="pa-2" :style="{background: partColor}"
                      style="display:flex;flex-direction: row; justify-content:center; align-items:center;" wrap>
                <img class="part-icon" :src="'src/assets/images/icons/'+part.image" alt="">
                <div class="ml-3">
                    <p class="headline white--text">{{part.name}}</p>
                    <p class="title white--text"> Пройдено уроков: {{completed}} из {{part.contents.length}}</p>
                </div>
                <v-spacer></v-spacer>
                <v-btn @click.native="onClickAHeadOfSchedule()" class="mr-4" large outline round light>
                    {{$root.$data.aHeadOfSchedule}}
                </v-btn>
            </v-layout>


            <!--<v-card-row class="pa-2" :style="{background: partColor}">-->
            <!--&lt;!&ndash;<div style="position:absolute; left:0; top:0;" class="ma-2 pa-2">&ndash;&gt;-->
            <!--&lt;!&ndash;<v-icon light>arrow_back</v-icon>&ndash;&gt;-->
            <!--&lt;!&ndash;</div>&ndash;&gt;-->
            <!--<img class="part-icon" :src="'src/assets/images/icons/'+part.image" alt="">-->
            <!--<div class="ml-3">-->
            <!--<p class="headline white&#45;&#45;text">{{part.name}}</p>-->
            <!--<p class="title white&#45;&#45;text"> Пройдено уроков: {{completed}} из {{part.contents.length}}</p>-->
            <!--&lt;!&ndash;<v-card-title class="white&#45;&#45;text pb-0">{{part.name}}</v-card-title>&ndash;&gt;-->
            <!--&lt;!&ndash;<v-card-text>&ndash;&gt;-->
            <!--&lt;!&ndash;&ndash;&gt;-->
            <!--&lt;!&ndash;</v-card-text>&ndash;&gt;-->
            <!--&lt;!&ndash;<v-subheader class="white&#45;&#45;text">Пройдено уроков: 0 из {{part.contents.length}}&ndash;&gt;-->
            <!--&lt;!&ndash;</v-subheader>&ndash;&gt;-->
            <!--</div>-->
            <!--<v-spacer></v-spacer>-->
            <!--<v-btn @click.native="onClickAHeadOfSchedule()" class="mr-4" large outline round light>-->
            <!--{{$root.$data.aHeadOfSchedule}}-->
            <!--</v-btn>-->

            <!--</v-card-row>-->
        </v-card>

        <v-container>
            <div>
                <v-layout row-sm column wrap child-flex-sm>
                    <div v-for="(item,index) in part.contents">
                        <Card :number="index" :content="item" :color="partColor"
                              :isLast="index==part.contents.length-1"></Card>
                    </div>
                </v-layout>
            </div>
        </v-container>

        <!--<v-card-text>-->
        <!--<v-card-row height="75px">-->
        <!--<v-icon class="mr-5" dark>card_membership</v-icon>-->
        <!--<div>-->
        <!--<div>Membership Number</div>-->
        <!--<strong>113241423</strong>-->
        <!--</div>-->
        <!--</v-card-row>-->
        <!--</v-card-text>-->
        <!--<v-divider></v-divider>-->
        <!--<v-card-row actions>-->
        <!--<v-btn flat class="blue&#45;&#45;text darken-1">{{aHeadOfSchedule}}</v-btn>-->
        <!--&lt;!&ndash;&lt;!&ndash;<v-btn flat class="blue&#45;&#45;text darken-1"></v-btn>&ndash;&gt;&ndash;&gt;-->
        <!--</v-card-row>-->
        <!--{{part.contents}}-->
    </v-container>
</template>

<script>
    import Card from './models/Card.vue'

    export default {
        data() {
            return {
                part: null,
                colors:
//                ['#ff5f8e', '#f85dce', '#9683ff', '#59b5ff', '#3be6b5', '#ffb04b']
                    [
                        'linear-gradient(90deg, rgba(255, 102, 153, 1) 0%, rgba(255, 97, 145, 1) 54.02%, rgba(255, 90, 134, 1) 100%)',
                        'linear-gradient(90deg, rgba(248, 111, 230, 1) 0%, rgba(248, 105, 222, 1) 32.45%, rgba(248, 88, 200, 1) 82.73%, rgba(248, 81, 191, 1) 100%)',
                        'linear-gradient(90deg, rgba(145, 143, 255, 1) 0%, rgba(148, 135, 255, 1) 50.32%, rgba(153, 122, 255, 1) 100%)',
                        'linear-gradient(90deg, rgba(89, 204, 255, 1) 0%, rgba(89, 196, 255, 1) 40.04%, rgba(89, 175, 255, 1) 100%)',
                        'linear-gradient(90deg, rgba(60, 232, 180, 1) 0%, rgba(56, 224, 183, 1) 48.72%, rgba(48, 210, 189, 1) 100%)',
                        'linear-gradient(90deg, rgba(255, 191, 92, 1) 0%, rgba(255, 184, 84, 1) 38.19%, rgba(255, 163, 62, 1) 97.4%, rgba(255, 162, 61, 1) 100%)'
                    ]
            }
        },
        components: {
            Card
        },
        computed: {
            partColor() {
                return this.colors[this.$route.params.id % this.colors.length];
            },
            completed() {
                let getters = this.$store.getters;
                if (getters.levelParent > this.$route.params.id) return this.part.contents.length;
                else if (getters.levelParent == this.$route.params.id) return getters.levelChild;
                return 0;
            }
        },
        watch: {
            '$route.params.id'() {
                let partId = this.$route.params.id;
                this.part = parts[partId];
            }
        },
        methods: {
            onClickAHeadOfSchedule() {
                let contentPart = new Object();
                contentPart.words = new Array();
                contentPart.inputs = new Array();
                contentPart.sentences = new Array();
                contentPart.listens = new Array();
                contentPart.multi = new Array();

                this.part.contents.forEach(function (item) {
                    if (item.words)
                        contentPart.words = contentPart.words.concat(item.words);
                    if (item.inputs)
                        contentPart.inputs = contentPart.inputs.concat(item.inputs);
                    if (item.sentences)
                        contentPart.sentences = contentPart.sentences.concat(item.sentences);
                    if (item.listens)
                        contentPart.listens = contentPart.listens.concat(item.listens);
                    if (item.multi)
                        contentPart.multi = contentPart.multi.concat(item.multi);
                });
                contentPart.words = contentPart.words.slice(0, 5);
                contentPart.inputs = contentPart.inputs.slice(0, 5);
                contentPart.sentences = contentPart.sentences.slice(0, 5);
                contentPart.listens = contentPart.listens.slice(0, 5);
                contentPart.multi = contentPart.multi.slice(0, 5);
                console.log("words = ", contentPart);
//              send to Game
                this.$store.state.partId = this.$route.params.id;
                this.$store.state.partChildId = this.part.contents.length - 1;
                this.$store.state.isLast = true;

                this.$router.push({name: 'game', params: {content: contentPart}});
            }
        },
        created: function () {
            let partId = this.$route.params.id;
            this.part = parts[partId];
        }
    }
</script>

<style type="text/css">

    .part-icon {
        width: 160px;
        height: 160px;
        margin: 10px 20px;
    }

</style>