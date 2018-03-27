import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const Attrs = {
    'LEVEL': 'level',
    'SCORE': 'score',
    'GOAL': 'goal',
    'SOUND_EFFECTS': 'soundEffects',
    'SOUND_EAR': 'soundEar',
};

const store = new Vuex.Store({
    state: {
        game: {
            job: [],
            size: 0
        },
        // keySettings: false,
        goals: [
            {
                title: 'Базовая',
                goal: 15
            },
            {
                title: 'Обычная',
                goal: 30
            },
            {
                title: 'Суровая',
                goal: 45
            },
        ],
        goal: localStorage.getItem(Attrs.GOAL) ? parseInt(localStorage.getItem(Attrs.GOAL)) : 15,
        score: localStorage.getItem(Attrs.SCORE) ? parseInt(localStorage.getItem(Attrs.SCORE)) : 0,
        level: localStorage.getItem(Attrs.LEVEL) ? parseFloat(localStorage.getItem(Attrs.LEVEL)) : 0,
        soundEffects: localStorage.getItem(Attrs.SOUND_EFFECTS) ? localStorage.getItem(Attrs.SOUND_EFFECTS) == 'true' : true,
        soundEar: localStorage.getItem(Attrs.SOUND_EAR) ? localStorage.getItem(Attrs.SOUND_EAR) == 'true' : true,
    },
    getters: {
        levelParent: state => {
            return parseInt(state.level);
        },
        levelChild: state => {
            let level = state.level.toString();
            return parseInt(level.indexOf('.') != -1 ? level.split('.').pop()[0] : 0);
        }
    },
    mutations: {
        levelUp(state) {
            let isCompleteBefore = (state.partId * 10 + state.partChildId) / 10 < state.level;
            if (isCompleteBefore) return;

            if (state.isLast) state.level = parseInt(state.level) + 1;
            else state.level = Math.round((state.level + 0.1) * 10) / 10;
            localStorage.setItem(Attrs.LEVEL, state.level);
            //SAVE SCORE
            state.score += state.game.size;
            localStorage.setItem(Attrs.SCORE, state.score);
        },
        setGoal(state, value) {
            state.goal = value;
            localStorage.setItem(Attrs.GOAL, state.goal);
        },
        setSoundEar(state, value) {
            state.soundEar = value;
            localStorage.setItem(Attrs.SOUND_EAR, state.soundEar);
        },
        setSoundEffects(state, value) {
            state.soundEffects = value;
            localStorage.setItem(Attrs.SOUND_EFFECTS, state.soundEffects);
        }
    },
    // actions: {},
});

export default store;