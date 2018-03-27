<template>
    <div class="text-xs-center">
        <h6 class="ma-0 pa-0" style="display: inline-block;">Ежедневная цель</h6>
        <!--<v-spacer></v-spacer>-->
        <v-menu left>
            <v-btn icon slot="activator">
                <v-icon>settings</v-icon>
            </v-btn>

            <v-list>
                <v-list-tile v-for="item in items" :key="item.title" @click.native="onClickItem(item.goal)">
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    {
                        title: 'Базовая',
                        goal: 10
                    },
                    {
                        title: 'Обычная',
                        goal: 20
                    },
                    {
                        title: 'Суровая',
                        goal: 30
                    },
                    {
                        title: 'Бешеная',
                        goal: 50
                    }
                ]
            }
        },
        methods: {
            onClickItem(goal) {
                this.$store.commit('setGoal', goal);
            }
        }
    }
</script>