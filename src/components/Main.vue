<template>
    <div id="main">
        <v-layout style="display:flex; flex-direction: row; justify-content: center; align-content: center;" wrap>
            <!--<v-flex xs9 style="display:flex; flex-direction: row; justify-content: center;">-->
            <!--<v-card flat class="transparent">-->
            <!--<v-container>-->
            <!--{{$store.state.level}} --- {{$store.getters.levelParent}} --- {{$store.getters.levelChild}}-->
            <v-layout wrap child-flex-sm>
                <div class="parts">
                    <PartItem v-for="(part,index) in parts"
                              :id="index" :part="part"
                              :style="{background: colors[index%colors.length]}"></PartItem>
                </div>
            </v-layout>
            <!--</v-container>-->
            <!--</v-card>-->
            <!--</v-flex>-->
            <!--<v-flex xs3>-->
            <RightSide></RightSide>
            <!--</v-flex>-->
        </v-layout>
    </div>
</template>

<script>
    import Vue from 'vue'
    import PartItem from './models/ItemPart.vue'
    import RightSide from './RightSide.vue'

    export default {
        data() {
            return {
                parts: parts,
                once: true,
                colors: [
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
            PartItem,
            RightSide
        }
    }
</script>

<style>
    #main {
        width: 100%;
        max-width: 100%;
    }

    .parts {
        text-align: center;
        max-width: 900px;
    }

    .parts a:hover {
        opacity: 0.8;
    }

    /*.parts > div {*/
    /*display: inline-block;*/
    /*margin: 20px 80px;*/
    /*}*/

    /*.parts > .once {*/
    /*display: block;*/
    /*margin: 0 auto;*/
    /*}*/

</style>