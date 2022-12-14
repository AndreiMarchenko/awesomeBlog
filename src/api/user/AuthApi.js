import axios from "../axiosConf";

class AuthApi {
    static register(data) {
        return axios.post("/auth/register", {
            name: data.name,
            email: data.email,
        });
    }

    static login(data) {
        return axios.post("/auth/login", {
            email: data.email,
            password: data.password
        });
    }

    static logout() {
         return axios.post("/auth/logout");
    }
}

export default AuthApi;