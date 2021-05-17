import axios from "../axiosConf";

class UserApi {
    static get(data) {
        return axios.get('/user/' + data.id);
    }

    static getFollowers(data) {
        return axios.get('/user/followers/' + data.id + '?page=' + data.page);
    }

    static getSameFollowers(data) {
        return axios.get('/user/followers/same/' + data.id + '?page=' + data.page);
    }

    static getFollowings(data) {
        return axios.get('/user/followings/' + data.id + '?page=' + data.page);
    }

    static getSameFollowings(data) {
        return axios.get('/user/followings/same/' + data.id + '?page=' + data.page);
    }
}

export default UserApi;