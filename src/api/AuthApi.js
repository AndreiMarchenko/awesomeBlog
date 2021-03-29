import axios from "./axiosConf";
import setCookie from "../helpers/cookie/setCookie";
import getCookie from "../helpers/cookie/getCookie";
import deleteCookie from "../helpers/cookie/deleteCookie";

class AuthApi {
    static register(data) {
        return axios.post("/auth/register", {
            name: data.name,
            email: data.email,
            password: data.name,
            password_confirmation: data.name,
        });
    }

    static login(data) {
        return axios.post("/auth/login", {
            email: data.email,
            password: data.password
        });
    }

    static logout() {
         return axios.post("/auth/logout", {}, {
            headers: {
                Authorization: "Bearer " + getCookie("Token")
            }
        });
    }
}

export default AuthApi;