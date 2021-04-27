import axios from "../axiosConf";

class FollowApi {
    static follow(data) {
        return axios.post('/follow/add', {
            id: data.id
        });
    }

    static unfollow(data) {
        return axios.post('/follow/remove', {
            id: data.id
        });
    }
}

export default FollowApi;