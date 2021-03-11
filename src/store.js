export default {
    state: {
        user: {
            username: null,
            userPictureSrc: null,
            followersNumber: null,
            followingNumber: null,
            text: null
        }
    },
    mutations: {
        setCurrentUser(state, user) {
            state.user = {
                username: user.username,
                userPictureSrc: user.userPictureSrc,
                followersNumber: user.followersNumber,
                followingNumber: user.followingNumber,
                text: user.text
            }
        }
    }
};