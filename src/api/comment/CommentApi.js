import axios from "../axiosConf";

class CommentApi {
    static getAll(data) {
        return axios.get("/comment/all/" + data.id);
    }

    static getCount(data) {
        return axios.get("/comment/count/" + data.id);
    }

    static add(data) {
        return axios.post("/comment/add/" + data.id, {
            text: data.text
        });
    }
}

export default CommentApi;