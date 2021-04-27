import axios from "../axiosConf";

class ResetPasswordApi {
    static resetPassword(data) {
        return axios.post('reset-password', {
            email: data.email
        });
    }
}

export default ResetPasswordApi;