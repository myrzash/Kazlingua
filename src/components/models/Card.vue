<template>
    <v-card class="mcard pa-4 mb-4 elevation-1">
        <!--{{isLast}}-->
        <!--{{this.$store.getters.levelParent}}>{{this.$route.params.id}}-->
        <!--{{$route.params.id}}.{{number}} - - -->
        <!--{{$store.getters.levelChild}}-->

        <h4 class="text-xs-center headline pb-2" style="font-weight:500;" v-if="content.title">{{content.title}}</h4>
        <h4 v-if="content.description" style="font-weight:300;" class="text-xs-center headline">
            {{content.description.toLowerCase()}}</h4>
        <!--<h4 class="title" v-if="content.description">{{content.title}}</h4>-->
        <!--<h4  class="headline text-xs-center">{{content.description.toLowerCase()}} </h4>-->
        <v-btn class="mstart" large round
               :disabled="!active"
               :style="[active?{background: color, color: '#fff'}:'']"
               @click.native="onClickStart({name:'game',params:{content:content}})">
            <!-- :class="[active?'elevation-0':'']"-->
            {{textButton}}
        </v-btn>
    </v-card>
</template>
<script>
    export default {
        computed: {
            active() {
                if (this.$store.getters.levelParent > this.$route.params.id) return true;
                if (this.$store.getters.levelParent < this.$route.params.id) return false;
                return this.$store.getters.levelChild >= this.number;
            },
            textButton() {
                let getters = this.$store.getters;
                if (getters.levelParent > this.$route.params.id) return this.$root.$data.repeat;
                else if (getters.levelParent == this.$route.params.id && getters.levelChild > this.number) return this.$root.$data.repeat;
                return this.$root.$data.start;
            }
//            getWords() {
//                if (!this.content.words) return null;
//                let list = new Array();
//                this.content.words.forEach((item) => {
//                    list.push(item.kz);
//                });
//                return list.join(', ').toLowerCase();
//            }
        },
        methods: {
            onClickStart(path) {
                this.$store.state.partId = this.$route.params.id;
                this.$store.state.partChildId = this.number;
                this.$store.state.isLast = this.isLast;
                this.$router.push(path);
            }
        },
        props: ['number', 'content', 'color', 'isLast']
    }
</script>
<style>
    .mcard {
        width: 260px;
        height: 300px !important;
        border-radius: 15px;
        margin: 10px auto;
        position: relative;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    .mstart {
        position: absolute;
        bottom: 5%;
        width: 80%;
        left: 10%;
        margin: 0;
    }

</style>