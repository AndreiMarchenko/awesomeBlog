import axios from "./axiosConf";
import getCookie from "../helpers/cookie/getCookie";

class EditProfileApi {
    static changeName() {
        axios.post('edit-user/name', {
            name: this.name
        }, {
            headers : {
                Authorization: "Bearer " + getCookie("Token")
            }
        }).then(resp => {
            this.name = null;
            this.$store.dispatch("setCurrentUser");
            this.$toasted.success("Name changed successfully!");
        }).catch(err => {
            for (let error in err.response.data.errors) {
                this.$toasted.error(err.response.data.errors[error]);
            }
        });
    }

    static changePassword() {
        axios.post('edit-user/password', {
            password: this.password,
            newPassword: this.newPassword,
            newPassword_confirmation: this.newPassword_confirmation
        }, {
            headers : {
                Authorization: "Bearer " + getCookie("Token")
            }
        }).then(resp => {
            this.password = null;
            this.newPassword = null;
            this.newPassword_confirmation = null;
            this.$toasted.success("Password changed successfully!");
        }).catch(err => {
            for (let error in err.response.data.errors) {
                this.$toasted.error(err.response.data.errors[error]);
            }
        });
    }

    static changePicture(formData) {
        axios.post('edit-user/picture', formData, {
            headers : {
                Authorization: "Bearer " + getCookie("Token"),
                'Content-Type': 'multipart/form-data'
            }
        }).then(resp => {
            this.$store.commit('setCurrentUser', {
                email: this.$store.state.user.email,
                name: this.$store.state.user.name,
                picture: resp.data.path
            });
            this.$toasted.success("Picture changed successfully!");
        }).catch(err => {
            for (let error in err.response.data.errors) {
                this.$toasted.error(err.response.data.errors[error]);
            }
        });
    }
}

export default EditProfileApi;