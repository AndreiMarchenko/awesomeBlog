import Vue from 'vue';
import Toasted from "vue-toasted";
import Echo from "laravel-echo"

import Loader from "./components/Loader.vue";
import getCookie from "./helpers/cookie/getCookie";

Vue.use(Toasted, {
    position: "bottom-center",
    duration: 5000,
    theme: "bubble",
    fullWidth: true,
    singleton: true,
});

window.Pusher = require('pusher-js');

window.Echo = new Echo({
    broadcaster: env.BROADCASTER,
    key: env.PUSHER_KEY,
    wsHost: window.location.hostname,
    wsPort: 6001,
    forceTLS: false,
    disableStats: true,
    authEndpoint: env.API_LOCAL_ENDPOINT + '/broadcasting/auth/',
    auth: {
        headers: {
            Authorization: 'Bearer ' + getCookie('Token')
        },
    },
});

Vue.component('Loader', Loader);

Vue.filter('apiFile', function (value) {
    return env.API_ENDPOINT + '/' + value;
});


export default Vue;
