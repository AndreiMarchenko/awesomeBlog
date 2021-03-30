import axios from "axios";
import Vue from "vue";
import getCookie from "../helpers/cookie/getCookie";

const api = axios.create({
    baseURL: env.API_LOCAL_ENDPOINT
});


api.interceptors.request.use((config) => {
    config.headers = {
        Authorization: "Bearer " + getCookie("Token"),
        Accept: "application/json"
    };
    return config;
});

api.interceptors.response.use((resp) => {
        return resp;
    },
    (err) => {
        if (err.response.status === 401) {
            Vue.toasted.error("User doesn't exist");
        } else {
            for (let error in err.response.data.errors) {
                Vue.toasted.error(err.response.data.errors[error]);
            }
        }
    });

export default api;