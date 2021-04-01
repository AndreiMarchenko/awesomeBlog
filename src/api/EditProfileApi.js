import axios from "./axiosConf";

class EditProfileApi {
    static changeName(data) {
        return axios.post('edit-user/name', {
            name: data.name
        });
    }

    static changePassword(data) {
        return axios.post('edit-user/password', {
            password: data.password,
            newPassword: data.newPassword,
            newPassword_confirmation: data.newPassword_confirmation
        });
    }

    static changePicture(formData) {
        return axios.post('edit-user/picture', formData, {
            headers : {
                'Content-Type': 'multipart/form-data'
            }
        });
    }

    static changeInfo(data) {
        return axios.post('edit-user/info', {
            info: data.info
        });
    }
}

export default EditProfileApi;