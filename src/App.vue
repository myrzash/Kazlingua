<template>
    <v-app>
        <v-toolbar style="background:#009ed6; height:70px;" light :class="[$route.path=='/'?'elevation-0':'']">

            <!--<v-toolbar-logo>-->
            <!--<img src="src/assets/images/logo.png" style="height:60px; margin-left:40px;" alt="ҚазLingua">-->
            <!--</v-toolbar-logo>-->
            <!--<v-toolbar-side-icon light></v-toolbar-side-icon>-->
            <v-toolbar-title v-if="$route.path!='/'">
                <span class="title pl-4">{{$root.$data.title}}</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="menu-items">
                <!--<v-btn light icon>-->
                <!--<v-icon>list</v-icon>-->
                <!--</v-btn>-->

                <v-toolbar-item>
                    <router-link to="/main">{{$root.$data.main.toUpperCase()}}</router-link>
                </v-toolbar-item>
                <v-toolbar-item>
                    <router-link to="/dict">{{$root.$data.dictionary.toUpperCase()}}</router-link>
                </v-toolbar-item>
                <v-toolbar-item>
                    <router-link to="/settings">{{$root.$data.settings.toUpperCase()}}</router-link>
                </v-toolbar-item>
                <!--<v-toolbar-item>-->
                <!--<div class="text-xs-center">-->
                <!--<v-menu offset-y>-->
                <!--<a slot="activator">{{$root.$data.typeLangs[0].title}}-->
                <!--<v-icon light>arrow_drop_down</v-icon>-->
                <!--</a>-->
                <!--<v-list>-->
                <!--<v-list-item v-for="item in $root.$data.typeLangs" :key="item">-->
                <!--<v-list-tile>-->
                <!--<v-list-tile-title>{{ item.title }}</v-list-tile-title>-->
                <!--</v-list-tile>-->
                <!--</v-list-item>-->
                <!--</v-list>-->
                <!--</v-menu>-->
                <!--</div>-->
                <!--</v-toolbar-item>-->
                <!--<v-toolbar-item>-->
                <!--<div class="text-xs-center">-->
                <!--<v-menu offset-y>-->
                <!--<a slot="activator">{{$root.$data.grades[0]}}-->
                <!--<v-icon light>arrow_drop_down</v-icon>-->
                <!--</a>-->
                <!--<v-list>-->
                <!--<v-list-item v-for="item in $root.$data.grades" :key="item">-->
                <!--<v-list-tile>-->
                <!--<v-list-tile-title>{{ item }}</v-list-tile-title>-->
                <!--</v-list-tile>-->
                <!--</v-list-item>-->
                <!--</v-list>-->
                <!--</v-menu>-->
                <!--</div>-->
                <!--</v-toolbar-item>-->


                <!--<v-menu left bottom origin="top right" transition="v-scale-transition">-->
                <!--<v-btn light icon slot="activator">-->
                <!--<v-icon>more_vert</v-icon>-->
                <!--</v-btn>-->
                <!--<v-list>-->
                <!--<v-list-item>-->
                <!--<v-list-tile v-for="(menuitem,index) in $root.$data.menu" @click.native="onClickMenu(index)">-->
                <!--<v-list-tile-title>{{menuitem.title}}</v-list-tile-title>-->
                <!--</v-list-tile>-->
                <!--</v-list-item>-->
                <!--</v-list>-->
                <!--</v-menu>-->
            </v-toolbar-items>
        </v-toolbar>

        <div class="grey lighten-4" style="position:fixed; top:0; left:0; width:100%; height:100%;"></div>

        <main>
            <v-container fluid>
                <v-slide-x-transition mode="out-in">
                    <!--<v-layout column align-center>-->
                    <!--</v-layout>-->
                    <router-view class="tile">
                    </router-view>
                </v-slide-x-transition>
            </v-container>
        </main>

        <v-footer style="background:#009ed6" fixed>
            <v-spacer></v-spacer>
            <div>&copy {{ $root.$data.copyright }}</div>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        methods: {
            onClickMenu(index) {
                switch (index) {
                    case 0:
                        this.$router.push('/settings');
                        break;
                    default:
                        break;
                }
            }
        }
    }
</script>

<style lang="stylus">
    @import './stylus/main'
</style>

<style>
    .tile {
        width: 80%;
        max-width: 900px;
        margin: 0 auto;
        position: relative;
    }

    .menu-items a {
        text-decoration: none;
        color: white;
        font-size: 1.1em;
        font-weight: 400;
        width: 150px;
        text-align: center;
    }
</style>