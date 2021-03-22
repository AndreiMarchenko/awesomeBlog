import Vue from './bootstrap';
import App from './App.vue';
import Router from "./router";
import Store from "./store";
import Vuex from "vuex";

import "./scss/_common.scss";

Vue.use(Vuex);

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