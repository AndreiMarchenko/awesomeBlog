import axios from "../axiosConf";

class LikeApi {
    static likeAction(data) {
        return axios.post('/like/action/' + data.id);
    }
}

export default LikeApi;