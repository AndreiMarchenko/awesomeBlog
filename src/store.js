export default {
    state: {
        user: {
            email: null,
            password: null,
        }
    },
    mutations: {
        setCurrentUser(state, user) {
            state.user = {
                email: user.email,
                password: user.password
            }
        }
    }
};