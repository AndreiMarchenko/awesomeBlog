import axios from "axios";
import Vue from "vue";
import router from "../router";
import NavigationDuplicated from 'vue-router';
import getCookie from "../helpers/cookie/getCookie";

const api = axios.create({
    baseURL: env.API_LOCAL_ENDPOINT
});


api.interceptors.request.use((config) => {
    config.headers = {
        Authorization: "Bearer " + getCookie("Token"),
        Accept: "application/json",
        "X-Socket-Id": Echo.socketId()
    };
    return config;
});

api.interceptors.response.use((resp) => {
        return resp;
    },
    (err) => {
        if (err.response.status === 401) {
            router.push({name: 'login'}).catch(err => {
                if (err.name !== "NavigationDuplicated") {
                    throw err;
                }
            });
        }

        if (err.response.status === 500) {
            Vue.toasted.error("Problems with server! Try later");
        }

        for (let error in err.response.data.errors) {
            Vue.toasted.error(err.response.data.errors[error]);
        }
        return Promise.reject(err);
    });

export default api;