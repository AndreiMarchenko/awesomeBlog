import Vue from './bootstrap';
import App from './App.vue';
import Router from "./router";

import "./scss/_common.scss";


new Vue({
    el: '#app',
    data () {
        return {
        };
    },
    router: Router,
    render: h => h(App)
});