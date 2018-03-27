<template>

    <!--<v-dialog v-model="$root.$data.keySettings" :overlay=false width="900" style="margin:0; padding:0;">-->
    <!--{{$root.$data.keySettings}}-->
    <!--<v-btn primary light slot="activator">settings</v-btn>-->
    <!--<v-card>-->
    <!--<v-toolbar light class="blue lighten-1 elevation-0">-->
    <!--<v-icon light>settings</v-icon>-->
    <!--<v-toolbar-title>Настройки</v-toolbar-title>-->
    <!--<v-spacer></v-spacer>-->
    <!--&lt;!&ndash;<v-btn icon @click.native="$root.$data.keySettings = false" light>&ndash;&gt;-->
    <!--&lt;!&ndash;<v-icon>close</v-icon>&ndash;&gt;-->
    <!--&lt;!&ndash;</v-btn>&ndash;&gt;-->
    <!--</v-toolbar>-->
    <div>
        <!--<div class="grey lighten-3"-->
        <!--style="position:fixed; width:100%; height:100%; top:0; left:0;"></div>-->
        <v-layout row>

            <v-flex xs3>
                <v-card flat class="white pa-3">
                    <v-list class="pa-0" dense>
                        <v-list-tile style="height: 70px;" class="pt-2 pl-4" @click.native="menuId=0"
                                     :class="[menuId==0?'grey lighten-2':'']">
                            <h6>Обучение</h6>
                        </v-list-tile>
                        <!--<v-divider></v-divider>-->
                        <v-list-tile style="height: 70px;" class="pt-2 pl-4" @click.native="menuId=1"
                                     :class="[menuId==1?'grey lighten-2':'']">
                            <h6>Звук</h6>
                        </v-list-tile>
                    </v-list>
                </v-card>
            </v-flex>
            <v-flex xs9>
                <v-card
                        flat
                        height="400px"
                        class="pa-3"
                >
                    <div v-if="menuId==0">
                        <v-card-title class="pt-0">Установка ежедневной цели</v-card-title>
                        <v-divider></v-divider>
                        <v-subheader>
                            Выберите ежедневную цель, она поддержит вашу мотивацию. Ежедневную цель можно изменить в любой момент.
                        </v-subheader>

                        <v-layout row>
                            <v-flex xs2></v-flex>
                            <v-flex xs3 v-for="item in goals">
                                <v-radio primary :label="item.title" v-model="goal" class="mb-0"
                                         :value="item.goal"></v-radio>
                                <v-divider></v-divider>
                                <h6 class="pa-0 ma-0 mt-3 text-xs-center"
                                    :class="[item.goal==goal?'blue--text text--darken-4':'']">
                                    {{item.goal}}</h6>
                                <v-subheader :class="[item.goal==goal?'blue--text text--darken-4':'']">
                                    опыта в день
                                </v-subheader>
                            </v-flex>
                        </v-layout>
                        <!--<v-card-title>-->
                        <!--<v-radio primary v-for="item in goals" :label="item.title" v-model="goal"-->
                        <!--:value="item.goal"></v-radio>-->
                        <!--</v-card-title>-->
                        <!--<v-card-text>-->
                        <!--<v-slider disabled :label="goal" thumb-label max="50" hint="опыта в день"-->
                        <!--persistent-hint="true"-->
                        <!--v-model="goal" step="10"></v-slider>-->
                        <!--</v-card-text>-->
                        <!--<v-layout row align-center>-->
                        <!--<v-flex v-for="item in goals" xs2 offset-xs1>-->
                        <!--<v-radio :label="item.title" v-model="goal" :value="item.goal"></v-radio>-->
                        <!--</v-flex>-->
                        <!--</v-layout>-->
                    </div>
                    <div v-else-if="menuId==1">
                        <v-card-title class="pt-0">Настройки звука</v-card-title>
                        <v-divider></v-divider>
                        <!--<v-subheader>Настройки звука</v-subheader>-->
                        <v-layout row class="pt-4">
                            <v-flex xs10 offset-xs2>
                                <v-switch primary
                                          v-bind:label="`Упражнения на слух: ${textOnOff(soundEar)}.`"
                                          v-model="soundEar"></v-switch>
                                <v-switch primary
                                          v-bind:label="`Звуковые эффекты: ${textOnOff(soundEffects)}.`"
                                          v-model="soundEffects"></v-switch>
                            </v-flex>
                        </v-layout>
                    </div>
                </v-card>
            </v-flex>
        </v-layout>
        <!--</div>-->

        <!--<v-list three-line subheader>-->
        <!--<v-subheader>User Controls</v-subheader>-->
        <!--<v-list-tile avatar>-->
        <!--<v-list-tile-content>-->
        <!--<v-list-tile-title>Content filtering</v-list-tile-title>-->
        <!--<v-list-tile-sub-title>-->
        <!--Set the content filtering level to restrict appts that can be downloaded-->
        <!--</v-list-tile-sub-title>-->
        <!--</v-list-tile-content>-->
        <!--</v-list-tile>-->
        <!--<v-list-tile avatar>-->
        <!--<v-list-tile-content>-->
        <!--<v-list-tile-title>Password</v-list-tile-title>-->
        <!--<v-list-tile-sub-title>Require password for purchase or use password to restrict purchase-->
        <!--</v-list-tile-sub-title>-->
        <!--</v-list-tile-content>-->
        <!--</v-list-tile>-->
        <!--</v-list>-->
        <!--<v-divider></v-divider>-->
        <!--<v-list three-line subheader>-->
        <!--<v-subheader>General</v-subheader>-->
        <!--<v-list-tile avatar>-->
        <!--<v-list-tile-action>-->
        <!--<v-checkbox></v-checkbox>-->
        <!--</v-list-tile-action>-->
        <!--<v-list-tile-content>-->
        <!--<v-list-tile-title>Notifications</v-list-tile-title>-->
        <!--<v-list-tile-sub-title>Notify me about updates to apps or games that I downloaded-->
        <!--</v-list-tile-sub-title>-->
        <!--</v-list-tile-content>-->
        <!--</v-list-tile>-->
        <!--<v-list-tile avatar>-->
        <!--<v-list-tile-action>-->
        <!--<v-checkbox></v-checkbox>-->
        <!--</v-list-tile-action>-->
        <!--<v-list-tile-content>-->
        <!--<v-list-tile-title>Sound</v-list-tile-title>-->
        <!--<v-list-tile-sub-title>Auto-update apps at any time. Data charges may apply-->
        <!--</v-list-tile-sub-title>-->
        <!--</v-list-tile-content>-->
        <!--</v-list-tile>-->
        <!--<v-list-tile avatar>-->
        <!--<v-list-tile-action>-->
        <!--<v-checkbox></v-checkbox>-->
        <!--</v-list-tile-action>-->
        <!--<v-list-tile-content>-->
        <!--<v-list-tile-title>Auto-add widgets</v-list-tile-title>-->
        <!--<v-list-tile-sub-title>Automatically add home screen widgets</v-list-tile-sub-title>-->
        <!--</v-list-tile-content>-->
        <!--</v-list-tile>-->
        <!--</v-list>-->
        <!--</v-card>-->
        <!--</v-dialog>-->
    </div>
</template>

<script>
    export default {
        data: () => ({
            soundEffects: true,
            soundEar: true,
            goal: 0,
            menuId: 0
        }),
        computed: {
            goals() {
                return this.$store.state.goals;
            }
        },
        watch: {
            goal(val) {
                this.$store.commit('setGoal', val);
            },
            soundEar(val) {
                this.$store.commit('setSoundEar', val);
            },
            soundEffects(val) {
                this.$store.commit('setSoundEffects', val);
            }
        },
        created() {
            this.goal = this.$store.state.goal;
            this.soundEffects = this.$store.state.soundEffects;
            this.soundEar = this.$store.state.soundEar;
        },
        methods: {
            textOnOff(key) {
                return key ? 'включен' : 'отключен';
            }
        }
    }
</script>
