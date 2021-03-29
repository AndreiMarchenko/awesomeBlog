import user from "./states/user"

import axios from "./api/axiosConf";
import getCookie from "./helpers/cookie/getCookie";

export default {
    state: {
        user
    },
    mutations: {
        setCurrentUser(state, user) {
            for (let prop in user) {
                state.user[prop] = user[prop];
            }
        }
    },
    actions: {
        setCurrentUser(context) {
            axios.get("/auth/user-profile", {
                headers: {
                    Authorization: "Bearer " + getCookie("Token")
                }
            }).then(resp => {
                context.commit('setCurrentUser',
                    {
                        email: resp.data.email,
                        name: resp.data.name,
                        picture: resp.data.profile_picture
                    }
                )
            }).catch(err => {
                this.$toasted.error("Error occurred! Login again please.");
            });
        }
    }

};