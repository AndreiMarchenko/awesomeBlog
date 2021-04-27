import axios from "../axiosConf";

class UserApi {
    static get(data) {
        return axios.get('/user/' + data.id);
    }

    static getFollowers(data) {
        return axios.get('/user/followers/' + data.id);
    }

    static getFollowings(data) {
        return axios.get('/user/followings/' + data.id);
    }
}

export default UserApi;