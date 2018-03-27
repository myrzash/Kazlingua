<template>
    <v-card class="bottom-rounded">
        <h4 class="text-xs-center pa-4">{{$root.$data.exerciseCompleted}}</h4>
        <!--{{$store.state.partId}}.{{$store.state.partChildId}}, isLast:{{$store.state.isLast}}, level:{{$store.state.level}}-->
        <v-card-row>
            <v-spacer></v-spacer>
            <v-progress-circular
                    v-bind:size="180"
                    v-bind:width="20"
                    v-bind:rotate="270"
                    :value="score"
                    class="orange--text"
            >
                <h4 class="orange--text">
                    +{{game.size}}
                </h4>
                <!--<v-subheader>{{result}}</v-subheader>-->
                <!--<h4 class="orange&#45;&#45;text">{{result}}</h4>-->
            </v-progress-circular>
            <v-spacer></v-spacer>
        </v-card-row>
        <v-card-row>
        </v-card-row>

        <!--DEFAULT FOOTER-->
        <v-card-row class="grey lighten-2 bottom-rounded">
            <!--DIALOG SUBJECT-->
            <DialogResult v-if="game" :result="game.job"></DialogResult>
            <!--<v-btn round flat large class="ma-3 ml-5" @click.native.stop="dialog=true">{{$root.$data.lookSubject}}-->
            <!--</v-btn>-->
            <v-spacer></v-spacer>
            <!--<v-btn large class="ma-3 mr-5" round></v-btn>-->
            <router-link class="btn btn--large btn--light btn--raised btn--round mr-5 success"
                         :to="$store.state.isLast?'/main':{name:'part',params:{id:partId}}">
                {{$root.$data.next}}
            </router-link>
        </v-card-row>
    </v-card>
</template>

<script>
    import DialogResult from './DialogResult.vue'

    export default {
        data() {
            return {
                dialog: false,
                goal: 30
            }
        },
        created() {
            this.$store.commit('levelUp');
        },
        computed: {
            partId() {
                return this.$store.state.partId;
            },
            game() {
                return this.$store.state.game;
            },
            score() {
                return this.game.size / this.goal * 100;
            }
        },
        components: {
            DialogResult
        }
    }
</script>