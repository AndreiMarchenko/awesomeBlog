import Vue from './bootstrap';
import App from './App.vue';
import Router from "./router";
import Store from "./store";
import Vuex from "vuex";
import Toasted from 'vue-toasted';

import "./scss/_common.scss";


Vue.use(Vuex);

Vue.use(Toasted, {
    position: "bottom-center",
    duration: 5000,
    theme: "bubble",
    fullWidth: true,
    singleton: true,
});

new Vue({
    el: '#app',
    data () {
        return {
        };
    },
    store: new Vuex.Store(Store),
    router: Router,
    render: h => h(App)
});