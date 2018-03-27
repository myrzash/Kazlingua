<template>
    <v-layout row justify-center>
        <v-btn round flat large class="ma-3 ml-5" @click.native.stop="dialog=true">{{$root.$data.lookSubject}}
        </v-btn>
        <v-dialog v-model="dialog" width="800px">
            <v-card>
                <v-card-row>
                    <v-spacer></v-spacer>
                    <v-btn flat primary @click.native.stop="dialog=false">Закрыть</v-btn>
                </v-card-row>
                <div class="text-xs-center">
                    <h4>Проверьте свои результаты</h4>
                    <!--<h4>Шелкните по плитке, чтобы посмотреть решение</h4>-->
                </div>
                <v-layout row wrap class="pa-3" style="max-height: 600px; overflow:scroll;">
                    <v-flex xs6 v-for="item in result">
                        <v-card class="card-result mb-3 pa-2 elevation-0 lighten-4"
                                :class="[item.victory==true?'green green--text':'red red--text']">

                            <v-btn floating class=" statusRes white elevation-0" small>
                                <v-icon v-if="item.victory" class="green--text" large>done</v-icon>
                                <v-icon class="red--text" v-else>close</v-icon>
                            </v-btn>

                            <div class="pa-2">
                                <h5 class="ma-0 mr-4" style="line-height:1em;"
                                    :class="[item.victory==true?'green--text':'red--text']">{{item.task}}</h5>
                                <h6 class="mt-3" :class="[item.victory==true?'green--text':'red--text']">
                                    {{item.correctAnswer}}</h6>
                                <div v-if="item.victory==false">
                                    <h6 class="mb-1" style="font-weight:400;"
                                        :class="[item.victory==true?'green--text':'red--text']">Ваш ответ:</h6>
                                    <h6 class="mt-1 mb-1" :class="[item.victory==true?'green--text':'red--text']">
                                        {{item.userAnswer}}</h6>
                                </div>
                            </div>

                            <!--<v-subheader :class="[item.victory==true?'green&#45;&#45;text':'red&#45;&#45;text']">-->
                            <!--{{item.task}}-->
                            <!--</v-subheader>-->
                            <!--<p class="body-1 ml-3 mt-2" :class="[item.victory==true?'green&#45;&#45;text':'red&#45;&#45;text']">-->
                            <!--{{item.correctAnswer}}-->
                            <!--</p>-->
                            <!--<p class="body-1 ml-3"-->
                            <!--:class="[item.victory==true?'green&#45;&#45;text':'red&#45;&#45;text']">-->
                            <!--<span class="body-2">Ваш ответ:</span> {{item.userAnswer}}-->
                            <!--</p>-->
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script>

    export default {
//        data() {
//            return {
//
//            }
//        },
        props: ['result', 'dialog'],
    }
</script>

<style>

    /*RESULT*/
    .card-result {
        min-height: 180px;
        min-width: 180px;
        max-height: 180px;
        overflow: scroll;
        -webkit-border-radius: 20px;
        -moz-border-radius: 20px;
        border-radius: 20px;
    }

    .statusRes {
        position: absolute;
        right: 0;
        top: 0;
    }
</style>