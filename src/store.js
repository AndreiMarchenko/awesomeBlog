import user from "./states/user"

import axios from "./api/axiosConf";

export default {
    state: {
        user,
        posts: [],
    },
    mutations: {
        setCurrentUser(state, user) {
            for (let prop in user) {
                state.user[prop] = user[prop];
            }
        },
        setPosts(state, posts) {
            state.posts = posts;
        },
        addPosts(state, posts) {
            state.posts.push(...posts);
        },
        editPost(state, post) {
            let postIndex = state.posts.findIndex((item) => {
                return item.id == post.id;
            });
            state.posts.splice(postIndex, 1, post);

        }
    },
    actions: {
        setCurrentUser(context) {
            return axios.get("/auth/user-profile").then(resp => {
                context.commit('setCurrentUser',
                    {
                        id: resp.data.id,
                        email: resp.data.email,
                        name: resp.data.name,
                        picture: resp.data.profile_picture,
                        info: resp.data.info
                    }
                );
            });
        },
        setPosts(context, data) {
            return axios.get("/post/all/" + data.id).then(resp => {
               context.commit('setPosts', resp.data.data);
            });
        },
        addPosts(context, data) {
            return axios.get("/post/all/" + data.id + "?page=" + data.page).then(resp => {
                context.commit('addPosts', resp.data.data);
                return resp.data;
            });
        }
    }

};