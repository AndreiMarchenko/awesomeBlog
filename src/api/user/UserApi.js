import axios from "../axiosConf";

class UserApi {
    static get(data) {
        return axios.get('/user/' + data.id);
    }
}

export default UserApi;