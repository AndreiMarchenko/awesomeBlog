import axios from "../axiosConf";

class CommentApi {
    static getAll(data) {
        return axios.get("/comment/all/" + data.id + "?page=" + data.page);
    }

    static add(data) {
        return axios.post("/comment/add/" + data.id, {
            text: data.text
        });
    }

    static delete(data) {
        return axios.delete("/comment/delete/" + data.commentId);
    }
}

export default CommentApi;