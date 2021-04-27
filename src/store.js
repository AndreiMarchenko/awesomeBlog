import user from "./states/user"
import authenticatedUser from "./states/authenticatedUser";

import axios from "./api/axiosConf";

export default {
    state: {
        authenticatedUser,
        user,
        posts: [],
    },
    getters: {
        sortedPosts(state) {
            return state.posts.reverse();
        }
    },
    mutations: {
        setAuthenticatedUser(state, user) {
            for (let prop in user) {
                state.authenticatedUser[prop] = user[prop];
            }
        },
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
        setAuthenticatedUser(context) {
            return axios.get("/auth/user-profile").then(resp => {
                context.commit('setAuthenticatedUser',
                    {
                        id: resp.data.id,
                        email: resp.data.email,
                        name: resp.data.name,
                        picture: resp.data.picture,
                        info: resp.data.info,
                    }
                );
            });
        },
        setCurrentUser(context, id) {
            return axios.get("/user/" + id).then(resp => {
                context.commit('setCurrentUser',
                    {
                        id: resp.data.id,
                        email: resp.data.email,
                        name: resp.data.name,
                        picture: resp.data.picture,
                        info: resp.data.info,
                        followerCount: resp.data.followerCount,
                        followingCount: resp.data.followingCount,
                        isFollowedByAuth: resp.data.isFollowedByAuth
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