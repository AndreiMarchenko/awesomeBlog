import axios from '../axiosConf';

class PostApi {
    static create(data) {
        return axios.post('/post/create', data, {
            headers : {
                'Content-Type': 'multipart/form-data'
            }
        });
    }
    static edit(id, data) {
        return axios.post('/post/edit/' + id, data, {
            headers : {
                'Content-Type': 'multipart/form-data'
            }
        });
    }
    static delete(id) {
        return axios.delete('/post/delete/' + id);
    }
    static get(data) {
        return axios.get("/post/" + data.id);
    }
}

export default PostApi;