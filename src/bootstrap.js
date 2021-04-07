import Vue from 'vue';
import Toasted from "vue-toasted";

Vue.use(Toasted, {
    position: "bottom-center",
    duration: 5000,
    theme: "bubble",
    fullWidth: true,
    singleton: true,
});

Vue.filter('apiFile', function (value) {
    return env.API_ENDPOINT + '/' + value;
});


export default Vue;
