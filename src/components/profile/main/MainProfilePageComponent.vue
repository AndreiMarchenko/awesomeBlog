<template>
  <div>
    <header-component :nav-items="['My page', 'News', 'Logout']"></header-component>
    <profile-info-component
        @clicked-followers-btn="openFollowersModal"
        @clicked-following-btn="openFollowingModal"
        info-type="mainPage"
        :profile-info="profileInfo"
    >
    </profile-info-component>
    <profile-add-post-component></profile-add-post-component>
    <profile-slider-component :slider-items="sliderItems"></profile-slider-component>
    <profile-slider-mobile-component :slider-items="sliderItems"></profile-slider-mobile-component>
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
        @closed-following-modal="closeFollowingModal">
    </profile-list-modal-component>
    <div class="dark-body"></div>
  </div>
</template>

<script>
import HeaderComponent from "../../HeaderComponent.vue";
import ProfileInfoComponent from "../ProfileInfoComponent.vue";
import ProfileAddPostComponent from "../ProfileAddPostComponent.vue";
import ProfileSliderComponent from "../ProfileSliderComponent.vue";
import ProfileSliderMobileComponent from "../ProfileSliderMobileComponent.vue";
import ProfileListModalComponent from "../ProfileListModalComponent.vue";

export default {
  components: {
    HeaderComponent,
    ProfileInfoComponent,
    ProfileAddPostComponent,
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
          pictureSrc: "../../../images/profile/profilePicture.jpg"
        },
        {
          pictureSrc: "../../../images/profile/profilePicture.jpg"
        },
        {
          pictureSrc: "../../../images/profile/profilePicture.jpg"
        },
        {
          pictureSrc: "../../../images/profile/profilePicture.jpg"
        },
        {
          pictureSrc: "../../../images/profile/profilePicture.jpg"
        },
        {
          pictureSrc: "../../../images/profile/profilePicture.jpg"
        },
        {
          pictureSrc: "../../../images/profile/profilePicture.jpg"
        },
      ],

      usersAllList: [
        {
          name: "Sam Johns",
          pictureSrc: "../../../images/profile/profilePicture.jpg"
        },
        {
          name: "Sam Johns",
          pictureSrc: "../../../images/profile/profilePicture.jpg"
        },
        {
          name: "Sam Johns",
          pictureSrc: "../../../images/profile/profilePicture.jpg"
        },
        {
          name: "Sam Johns",
          pictureSrc: "../../../images/profile/profilePicture.jpg"
        },
        {
          name: "Sam Johns",
          pictureSrc: "../../../images/profile/profilePicture.jpg"
        },
        {
          name: "Sam Johns",
          pictureSrc: "../../../images/profile/profilePicture.jpg"
        },
        {
          name: "Sam Johns",
          pictureSrc: "../../../images/profile/profilePicture.jpg"
        },
        {
          name: "Sam Johns",
          pictureSrc: "../../../images/profile/profilePicture.jpg"
        },
        {
          name: "Sam Johns",
          pictureSrc: "../../../images/profile/profilePicture.jpg"
        },
        {
          name: "Sam Johns",
          pictureSrc: "../../../images/profile/profilePicture.jpg"
        },
        {
          name: "Sam Johns",
          pictureSrc: "../../../images/profile/profilePicture.jpg"
        },
        {
          name: "Sam Johns",
          pictureSrc: "../../../images/profile/profilePicture.jpg"
        },
        {
          name: "Sam Johns",
          pictureSrc: "../../../images/profile/profilePicture.jpg"
        },
        {
          name: "Sam Johns",
          pictureSrc: "../../../images/profile/profilePicture.jpg"
        },
        {
          name: "Sam Johns",
          pictureSrc: "../../../images/profile/profilePicture.jpg"
        },
        {
          name: "Sam Johns",
          pictureSrc: "../../../images/profile/profilePicture.jpg"
        },
        {
          name: "Sam Johns",
          pictureSrc: "../../../images/profile/profilePicture.jpg"
        },
        {
          name: "Sam Johns",
          pictureSrc: "../../../images/profile/profilePicture.jpg"
        },
        {
          name: "Sam Johns",
          pictureSrc: "../../../images/profile/profilePicture.jpg"
        },
        {
          name: "Sam Johns",
          pictureSrc: "../../../images/profile/profilePicture.jpg"
        },
        {
          name: "Sam Johns",
          pictureSrc: "../../../images/profile/profilePicture.jpg"
        },
        {
          name: "Sam Johns",
          pictureSrc: "../../../images/profile/profilePicture.jpg"
        },
        {
          name: "Sam Johns",
          pictureSrc: "../../../images/profile/profilePicture.jpg"
        },

      ],

      usersSameList: [
        {
          name: "Sam Johns",
          pictureSrc: "../../../images/profile/profilePicture.jpg"
        },
        {
          name: "Sam Johns",
          pictureSrc: "../../../images/profile/profilePicture.jpg"
        },
        {
          name: "Sam Johns",
          pictureSrc: "../../../images/profile/profilePicture.jpg"
        }
      ],

      profileInfo: {
        name: "John Smith",
        pictureSrc: "../../../images/profile/profilePicture.jpg",
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

<style>

</style>