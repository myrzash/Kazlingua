import Vue from 'vue'
import Vuetify from 'vuetify'
import VueHead from 'vue-head'
import VueRouter from 'vue-router'
import App from './App.vue'
import CardMain from './components/Main.vue'
import Part from './components/Part.vue'
import Game from './components/Game.vue'
import Introduction from './components/Intro.vue'
import GameResult from './components/games/GameResult.vue'
import GameRad from './components/games/Radio.vue'
import GameInput from './components/games/Input.vue'
import GameSent from './components/games/Sentence.vue'
import GameListen from './components/games/Listen.vue'
import GameMulti from './components/games/Multi.vue'
import Dictionary from './components/Dictionary.vue'
// const Dictionary = resolve => require.ensure([], () => resolve(require('./components/Dictionary.vue')));
import Settings from './components/Settings.vue'
import string from './data/strings'
import store from './store'

Vue.use(Vuetify);
Vue.use(VueHead);
Vue.use(VueRouter);

var router = new VueRouter({
    // hashbang: false,
    // history:true,
    // transitionOnLoad: true,
    // root: '/main',
    routes: [
        {path: '/', component: Introduction},
        {path: '/main', component: CardMain},
        {path: '/settings', name: 'settings', component: Settings},
        {
            path: '/game', name: 'game', component: Game,
            children: [
                {path: "rad/:id", name: 'rad', component: GameRad},
                {path: "inp/:id", name: 'inp', component: GameInput},
                {path: "sent/:id", name: 'sent', component: GameSent},
                {path: "list/:id", name: 'list', component: GameListen},
                {path: "multi/:id", name: 'multi', component: GameMulti},
            ]
        },
        {path: '/dict', component: Dictionary},
        {path: '/part/:id', name: 'part', component: Part},
        {path: "/res", name: 'res', component: GameResult},
    ]
});

const app = new Vue({
    el: '#app',
    router: router,
    head: {
        title: {
            inner: string.title,
            separator: ' '
        }
    },
    data: string,
    render: h => h(App),
    store
});

document.onselectstart = noselect;
document.oncontextmenu = noselect;
function noselect() {
    return false;
};