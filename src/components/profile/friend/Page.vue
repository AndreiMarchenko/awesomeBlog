<template>
  <div>
    <header-component :nav-items="['My page', 'News', 'Logout']"></header-component>
    <profile-info-component
        @clicked-followers-btn="openFollowersModal"
        @clicked-following-btn="openFollowingModal"
        info-type="friendPage"
        :profile-info="profileInfo"
    ></profile-info-component>
    <profile-slider-component
        :slider-items="sliderItems">
    </profile-slider-component>
    <profile-slider-mobile-component
        :slider-items="sliderItems">
    </profile-slider-mobile-component>
    <profile-list-modal-component
        modal-name="followers"
        :is-modal-active="followersModalState"
        @closed-followers-modal="closeFollowersModal"
        :users-all-list="usersAllList"
        :users-same-list="usersSameList">
    </profile-list-modal-component>
    <profile-list-modal-component
        modal-name="following"
        :is-modal-active="followingModalState"
        @closed-following-modal="closeFollowingModal"
        :users-all-list="usersAllList"
        :users-same-list="usersSameList">>
    </profile-list-modal-component>
    <div class="dark-body"></div>
  </div>
</template>

<script>
import HeaderComponent from "../../Header.vue";
import ProfileInfoComponent from "../Info.vue";
import ProfileSliderComponent from "../Slider.vue";
import ProfileSliderMobileComponent from "../SliderMobile.vue";
import ProfileListModalComponent from "../ListModal.vue";

export default {
  components: {
    HeaderComponent,
    ProfileInfoComponent,
    ProfileSliderComponent,
    ProfileSliderMobileComponent,
    ProfileListModalComponent
  },
  data() {
    return {
      followersModalState: false,
      followingModalState: false,
      sliderItems: [
        {
          id: 1,
          pictureSrc: "../images/profile/profilePicture.jpg"
        },
        {
          id: 2,
          pictureSrc: "../images/profile/profilePicture.jpg"
        },
        {
          id: 3,
          pictureSrc: "../images/profile/profilePicture.jpg"
        },
        {
          id: 4,
          pictureSrc: "../images/profile/profilePicture.jpg"
        },
        {
          id: 5,
          pictureSrc: "../images/profile/profilePicture.jpg"
        },
        {
          id: 6,
          pictureSrc: "../images/profile/profilePicture.jpg"
        },
        {
          id: 7,
          pictureSrc: "../images/profile/profilePicture.jpg"
        },
      ],
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
      profileInfo: {
        name: "John Smith",
        pictureSrc: "../images/profile/profilePicture.jpg",
        followersNumber: 12,
        followingNumber: 33,
        text: "text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text"
      }
    }
  },
  methods: {
    openFollowersModal() {
      this.followersModalState = true;
    },
    closeFollowersModal() {
      this.followersModalState = false;
    },
    openFollowingModal() {
      this.followingModalState = true;
    },
    closeFollowingModal() {
      this.followingModalState = false;
    }
  }
}
</script>

<style lang="scss" scoped>
</style>