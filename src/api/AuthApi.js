import axios from "./axiosConf";
import setCookie from "../helpers/cookie/setCookie";
import getCookie from "../helpers/cookie/getCookie";
import deleteCookie from "../helpers/cookie/deleteCookie";

class AuthApi {
    static register(data) {
        axios.post("/auth/register", {
            name: data.name,
            email: data.email,
            password: data.name,
            password_confirmation: data.name,
        }).then(resp => {
            if (resp.status === 201) {
                this.$router.push({name: "login"});
            }
        }).catch(err => {
            for (let error in err.response.data.errors) {
                this.$toasted.error(err.response.data.errors[error]);
            }
        })
    }

    static login(data) {
        axios.post("/auth/login", {
            email: data.email,
            password: data.password
        }).then(resp => {
            if (resp.status === 200) {
                this.$store.commit('setCurrentUser', {
                    email: resp.data.user.email,
                    name: resp.data.user.name
                })
                setCookie("Token", resp.data.access_token, {
                    "max-age": resp.data.expires_in,
                    samesite: "lax"
                });
                this.$router.push({name: "myPage"});
            }
        }).catch(err => {
            if (err.response.status === 401) {
                this.$toasted.error("User doesn't exist");
            } else {
                for (let error in err.response.data.errors) {
                    this.$toasted.error(err.response.data.errors[error]);
                }
            }
        })
    }

    static logout() {
        axios.post("/auth/logout", {}, {
            headers: {
                Authorization: "Bearer " + getCookie("Token")
            }
        }).then(resp => {
            deleteCookie("Token");
        }).catch(err => {
            for (let error in err.response.data.errors) {
                this.$toasted.error(err.response.data.errors[error]);
            }
        })
    }
}

export default AuthApi;