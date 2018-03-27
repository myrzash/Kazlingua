<template>
    <div id="intro">

        <img id="cloud" src="src/assets/images/cloud.png" alt="ҚазLingua">
        <v-layout row wrap align-center>

            <v-flex xs12 md6 lg4 offset-lg2>
                <v-card flat class="transparent pa-4">
                    <img id="logo" src="src/assets/images/logo.png" style="margin-top:0" alt="ҚазLingua">
                    <h3 class="white--text">ҚазLingua</h3>
                    <h5 class="white--text">
                        Приложение поможет изучить казахский язык быстрее. База заданий основана на частотном словаре 2 класса
                    </h5>
                    <div style="text-align: center;">
                        <v-btn @click.native="$router.push('/main')" class="elevation-0" large
                               style="width:200px; height:50px; color:#009ed6; border-radius: 10px;">
                            <span class="title">{{$root.$data.start}}</span>
                        </v-btn>
                    </div>
                </v-card>
            </v-flex>
            <v-flex xs12 md6 lg3>
                <v-layout column align-center>

                    <img :height="windowSize.y*0.7"
                         src="src/assets/images/phone.png" alt="">
                    <a style="z-index:2" class="mt-3 mb-5"
                       href="https://play.google.com/store/apps/details?id=kz.kazlingua">
                        <img src="src/assets/images/googleplay.png" alt="">
                    </a>
                    <div class="pt-5 mt-5"></div>
                    <!--<v-btn class="mb-5" href="https://play.google.com/store/apps/details?id=kz.kazlingua">-->
                    <!--<img src="src/assets/images/googleplay.png" alt="">-->
                    <!--</v-btn>-->
                </v-layout>
            </v-flex>
        </v-layout>


        <!--<v-card flat class="half transparent pa-4 ma-4" style="text-align:center;">-->
        <!--<img height="600" class="mb-5" src="src/assets/images/phone.png" alt="">-->
        <!--<br/>-->
        <!--&lt;!&ndash;<a  href="#" class="mr-4">&ndash;&gt;-->
        <!--&lt;!&ndash;<img src="src/assets/images/appstore.png" alt="">&ndash;&gt;-->
        <!--&lt;!&ndash;</a>&ndash;&gt;-->
        <!--<a href="https://play.google.com/store/apps/details?id=kz.kazlingua">-->
        <!--<img src="src/assets/images/googleplay.png" alt="">-->
        <!--</a>-->

        <!--</v-card>-->
    </div>
</template>

<script>
    export default {
        data: () => ({
            windowSize: {
                x: 0,
                y: 0
            }
        }),
        created() {
            this.windowSize = {x: window.innerWidth, y: window.innerHeight}
        }
    }
</script>

<style>
    #intro {
        background: #009ed6;
        position: fixed;
        left: 0;
        top: 70px;
        margin: 0;
        overflow: scroll;
        padding: 0;
        max-width: 100%;
        width: 100%;
        height: 100%;
    }

    .half {
        /*position: absolute;*/
        /*top: 0;*/
        /*left: 0;*/
        /*width: 50%;*/
    }

    #logo {
        position: absolute;
        bottom: 120%;
    }

    #cloud {
        position: fixed;
        bottom: 0;
        left: 0;
    }
</style>
