<template>
  <loader v-if="isLoading"></loader>
  <div v-else>
    <header-component :nav-items="navItems"></header-component>
    <profile-info-component
        :key="$route.params.id"
        @clicked-followers-btn="openFollowersModal"
        @clicked-following-btn="openFollowingModal"
        @followed="followedAction"
        @unfollowed="unfollowedAction"
        :info-type="infoType"
    >
    </profile-info-component>
    <profile-add-post-component v-if="isMyPage"></profile-add-post-component>
    <profile-slider-component v-if="needsSlider" class="profile-slider"></profile-slider-component>
    <profile-posts-list-component v-else-if="!isMobileDevice" class="profile-posts-list"></profile-posts-list-component>
    <profile-posts-list-mobile-component v-if="isMobileDevice" class="profile-posts-list-mobile"></profile-posts-list-mobile-component>
    <profile-list-modal-component v-if="followersModalState"
        modal-name="followers"
        :is-modal-active="followersModalState"
        @closed-followers-modal="closeFollowersModal"
        :users-all-list="allFollowers"
        :users-same-list="sameFollowers">
    </profile-list-modal-component>
    <profile-list-modal-component v-if="followingModalState"
        modal-name="following"
        :is-modal-active="followingModalState"
        @closed-following-modal="closeFollowingModal"
        :users-all-list="allFollowings"
        :users-same-list="sameFollowings">
    </profile-list-modal-component>
    <div class="dark-body"></div>
  </div>
</template>

<script>
import {mapState} from "vuex";
import HeaderComponent from "../../Header.vue";
import ProfileInfoComponent from "../Info.vue";
import ProfileAddPostComponent from "../AddPostBtn.vue";
import ProfileSliderComponent from "../Slider.vue";
import ProfilePostsListComponent from "../PostsList.vue";
import ProfilePostsListMobileComponent from "../PostsListMobile.vue";
import ProfileSliderMobileComponent from "../SliderMobile.vue";
import ProfileListModalComponent from "../ListModal.vue";
import UserApi from "../../../api/user/UserApi";

const EDIT_INFO_TYPE = "Edit";
const FOLLOW_INFO_TYPE = "Follow";
const UNFOLLOW_INFO_TYPE = "Unfollow";

export default {
  components: {
    HeaderComponent,
    ProfileInfoComponent,
    ProfileAddPostComponent,
    ProfileSliderComponent,
    ProfilePostsListComponent,
    ProfilePostsListMobileComponent,
    ProfileSliderMobileComponent,
    ProfileListModalComponent
  },
  mounted() {
    this.initProfile();
  },
  watch: {
    'authenticatedUser.id'() {
      if (this.user.id === this.authenticatedUser.id) {
        this.isMyPage = true;
      }
    }
  },
  computed: {
    ...mapState(['user', 'posts', 'authenticatedUser']),
    needsSlider() {
      return this.posts.length > 6 && !this.isMobileDevice;
    },
    isMobileDevice() {
      return window.matchMedia('(max-width: 950px)').matches;
    },
    infoType() {
      if (this.isMyPage) {
        return EDIT_INFO_TYPE;
      }

      if (this.user.isFollowedByAuth) {
        return UNFOLLOW_INFO_TYPE;
      }

      return FOLLOW_INFO_TYPE;
    }
  },
  data() {
    return {
      isLoading: true,
      isMyPage: false,
      followersModalState: false,
      followingModalState: false,
      navItems: ['My page', 'News', 'Logout'],

      allFollowers: [],
      sameFollowers: [],
      allFollowings: [],
      sameFollowings: [],

      usersAllList: [
        {
          name: "Sam Johns",
          pictureSrc: "../images/profile/profilePicture.jpg"
        },
        {
          name: "Sam Johns",
          pictureSrc: "../images/profile/profilePicture.jpg"
        },
        {
          name: "Sam Johns",
          pictureSrc: "../images/profile/profilePicture.jpg"
        },
        {
          name: "Sam Johns",
          pictureSrc: "../images/profile/profilePicture.jpg"
        },
        {
          name: "Sam Johns",
          pictureSrc: "../images/profile/profilePicture.jpg"
        },
        {
          name: "Sam Johns",
          pictureSrc: "../images/profile/profilePicture.jpg"
        },
        {
          name: "Sam Johns",
          pictureSrc: "../images/profile/profilePicture.jpg"
        },
        {
          name: "Sam Johns",
          pictureSrc: "../images/profile/profilePicture.jpg"
        },
        {
          name: "Sam Johns",
          pictureSrc: "../images/profile/profilePicture.jpg"
        },
        {
          name: "Sam Johns",
          pictureSrc: "../images/profile/profilePicture.jpg"
        },
        {
          name: "Sam Johns",
          pictureSrc: "../images/profile/profilePicture.jpg"
        },
        {
          name: "Sam Johns",
          pictureSrc: "../images/profile/profilePicture.jpg"
        },
        {
          name: "Sam Johns",
          pictureSrc: "../images/profile/profilePicture.jpg"
        },
        {
          name: "Sam Johns",
          pictureSrc: "../images/profile/profilePicture.jpg"
        },
        {
          name: "Sam Johns",
          pictureSrc: "../images/profile/profilePicture.jpg"
        },
        {
          name: "Sam Johns",
          pictureSrc: "../images/profile/profilePicture.jpg"
        },
        {
          name: "Sam Johns",
          pictureSrc: "../images/profile/profilePicture.jpg"
        },
        {
          name: "Sam Johns",
          pictureSrc: "../images/profile/profilePicture.jpg"
        },
        {
          name: "Sam Johns",
          pictureSrc: "../images/profile/profilePicture.jpg"
        },
        {
          name: "Sam Johns",
          pictureSrc: "../images/profile/profilePicture.jpg"
        },
        {
          name: "Sam Johns",
          pictureSrc: "../images/profile/profilePicture.jpg"
        },
        {
          name: "Sam Johns",
          pictureSrc: "../images/profile/profilePicture.jpg"
        },
        {
          name: "Sam Johns",
          pictureSrc: "../images/profile/profilePicture.jpg"
        },

      ],

      usersSameList: [
        {
          name: "Sam Johns",
          pictureSrc: "../images/profile/profilePicture.jpg"
        },
        {
          name: "Sam Johns",
          pictureSrc: "../images/profile/profilePicture.jpg"
        },
        {
          name: "Sam Johns",
          pictureSrc: "../images/profile/profilePicture.jpg"
        }
      ],
    }
  },
  methods: {
    initProfile() {
      Promise.all([
        this.$store.dispatch("setCurrentUser", this.$route.params.id),
        this.$store.dispatch("setPosts", this.$route.params.id),
      ]).then(() => {
        this.isLoading = false;
        if (this.user.id === this.authenticatedUser.id) {
          this.isMyPage = true;
        }
      });
    },
    followedAction() {
      this.$store.commit('setCurrentUser', {
        isFollowedByAuth: true,
        followerCount: this.user.followerCount + 1
      });
      this.allFollowers.push(this.authenticatedUser);
    },
    unfollowedAction() {
      this.$store.commit('setCurrentUser', {
        isFollowedByAuth: false,
        followerCount: this.user.followerCount - 1
      });
      this.allFollowers = this.allFollowers.filter(item => {
        return item.id !== this.authenticatedUser.id;
      });
    },
    openFollowersModal() {
      if (this.allFollowers.length !== 0) {
        this.followersModalState = true;
        return;
      }

      UserApi.getFollowers({
        id: this.user.id
      }).then(resp => {
        this.allFollowers = resp.data.followers;

        UserApi.getFollowers({
          id: this.authenticatedUser.id
        }).then(resp => {
          let followerIds = resp.data.followers.map(item => {
            return item.id;
          });
          this.sameFollowers = this.allFollowers.filter(item => {
            return followerIds.includes(item.id);
          });
        });

        this.followersModalState = true;
      });

    },
    closeFollowersModal() {
      this.followersModalState = false;
    },
    openFollowingModal() {
      if (this.allFollowings.length !== 0) {
        this.followingModalState = true;
        return;
      }

      UserApi.getFollowings({
        id: this.user.id
      }).then(resp => {
        this.allFollowings = resp.data.followings;

        UserApi.getFollowings({
          id: this.authenticatedUser.id
        }).then(resp => {
          let followingIds = resp.data.followings.map(item => {
            return item.id;
          });
          this.sameFollowings = this.allFollowings.filter(item => {
            return followingIds.includes(item.id);
          });
        });

        this.followingModalState = true;
      });

    },
    closeFollowingModal() {
      this.followingModalState = false;
    },
  },
}
</script>

<style lang="scss" scoped>
.profile-slider-mobile {
  display: none;
}
@media (max-width: 950px) {
  .profile-slider {
    display: none;
  }
  .profile-posts-list {
    display: none
  }
  .profile-slider-mobile {
    display: block;
  }
}
</style>