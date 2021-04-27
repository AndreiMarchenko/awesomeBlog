<template>
  <section class="profile-info">
    <div class="container">
      <loader v-if="!user" class="loader"></loader>
      <div v-else class="profile-info__content">
        <div class="profile-info__summary">
          <div class="profile-info__summary-wrapper_first">
            <div class="profile-info__name">
              {{ user.name }}
            </div>
            <div class="profile-info__picture-wrapper">
              <div class="profile-info__picture">
                <a v-if="user.picture" href="#"><img :src="user.picture | apiFile" alt=""></a>
              </div>
            </div>
              <profile-info-btn-component @click.native="infoBtnAction" :key="btnColor" class="profile-info__btn-comp" :color="btnColor">
                {{  infoType  }}
              </profile-info-btn-component>
          </div>
          <div class="profile-info__summary-wrapper_second">
            <div class="profile-info__followers">
              <a
                  @click="$emit('clicked-followers-btn')"
                  class="profile-info__followers-ref"
                  href="javascript:;">
                Followers: <span>{{ user.followerCount }}</span>
              </a>
            </div>
            <div class="profile-info__following">
              <a
                  @click="$emit('clicked-following-btn')"
                  class="profile-info__following-ref"
                  href="javascript:;">
                Following: <span>{{ user.followingCount }}</span>
              </a>
            </div>
          </div>
        </div>
        <div class="profile-info__about">
          <div class="profile-info__title">
            About me
          </div>
          <div class="profile-info__text">
            {{ user.info }}
          </div>
        </div>
      </div>
      <hr class="profile-info__line">
    </div>
  </section>
</template>

<script>
import FollowApi from "../../api/user/FollowApi";
import {mapState} from "vuex";
import ProfileInfoBtnComponent from "./InfoBtn.vue";

const EDIT_INFO_TYPE = "Edit";
const FOLLOW_INFO_TYPE = "Follow";
const UNFOLLOW_INFO_TYPE = "Unfollow";

export default {
  components: {
    ProfileInfoBtnComponent
  },
  props: {
    infoType: {
      type: String,
      required: true
    }
  },
  created() {
    this.initInfo();
  },
  watch: {
    infoType() {
      this.initInfo();
    }
  },
  data() {
    return {
      btnColor: null
    }
  },
  methods: {
    initInfo() {
      switch (this.infoType) {
        case EDIT_INFO_TYPE:
          this.btnColor = '#308CBF';
          break;
        case FOLLOW_INFO_TYPE:
          this.btnColor = '#BF3075';
          break;
        case UNFOLLOW_INFO_TYPE:
          this.btnColor = '#FF3527';
          break;
      }
    },
    infoBtnAction() {
      switch (this.infoType) {
        case EDIT_INFO_TYPE:
          this.$router.push({name: 'editProfile', params: {id: this.$route.params.id}});
          break;
        case FOLLOW_INFO_TYPE:
          FollowApi.follow({
            id: this.$route.params.id
          }).then(() => {
            this.$emit('followed');
          });
          break;
        case UNFOLLOW_INFO_TYPE:
          FollowApi.unfollow({
            id: this.$route.params.id
          }).then(() => {
            this.$emit('unfollowed');
          });
          break;
      }
    }
  },
  computed: {
    ...mapState(['user', 'authenticatedUser']),
  }
}
</script>

<style lang="scss" scoped>
.loader {
  margin-top: 100px;
}
.profile-info__content {
  display: flex;
  justify-content: space-between;
  padding-top: 125px;
}
.profile-info__summary {
  font-size: 20px;
  margin-right: 155px;
  margin-left: 20px;
  margin-bottom: 48px;
  display: flex;
  justify-content: space-between;
}
.profile-info__summary-wrapper_first {
  margin-left: 20px;
  position: relative;
}
.profile-info__name {
  margin-left: 12px;
  white-space: nowrap;
  position: absolute;
}
.profile-info__picture-wrapper {
  margin-top: 40px;
  display: flex;
  justify-content: center;
}
.profile-info__picture {
  border-radius: 50%;
  overflow: hidden;
}
.profile-info__picture img {
  display: block;
  width: 138px;
  height: 138px;
  padding-bottom: -5px;
}
.profile-info__btn-comp {
  position: absolute;
}
.profile-info__summary-wrapper_second {
  margin-left: 40px;
  padding-top: 20px;
}
.profile-info__followers {
  margin-top: 50px;
  margin-bottom: 20px;
}
.profile-info__followers-ref {
  display: flex;
}
.profile-info__followers span {
  margin-left: 10px;
  font-weight: bold;
}
.profile-info__following-ref {
  display: flex;

}
.profile-info__following span {
  margin-left: 10px;
  font-weight: bold;
}
.profile-info__about {
  flex: 1;
  margin-right: 40px;
}
.profile-info__title {
  font-size: 20px;
  text-align: center;
  margin-bottom: 30px;
}
.profile-info__text {
  text-align: center;
  font-size: 18px;
}
.profile-info__line {
  display: block;
  max-width: 1220px;
  height: 1px;
  border: 0;
  padding: 0;
  margin: 50px auto 0;
  border-top: 1px solid $mainColor;
}
@media (max-width: 1100px) {
  .profile-info__summary {
    margin-right: 100px;
    margin-left: 10px;
  }
  .profile-info__about {
    margin-right: 10px;
  }
}
@media (max-width: 950px) {
  .profile-info__summary {
    margin-right: 60px;
    margin-left: 0px;
  }
  .profile-info__line {
    margin-top: 30px;
  }
}
@media (max-width: 768px) {
  .profile-info__content {
    padding-top: 100px;
  }
}
@media (max-width: 730px) {
  .profile-info__content {
    flex-direction: column;
    padding-top: 100px;
  }
  .profile-info__summary-wrapper_first {
    margin-left: 100px
  }
  .profile-info__summary-wrapper_second {
    margin-right: 100px;
  }
  .profile-info__about {
    margin-top: 50px;
  }
  .profile-info__text {
    margin-left: 50px;
    margin-right: 50px;
  }
}
@media (max-width: 425px) {
  .profile-info__summary {
    margin-right: 0px;
  }
  .profile-info__summary-wrapper_first {
    margin-left: 30px
  }
  .profile-info__summary-wrapper_second {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 40px;
  }
}
@media (max-width: 375px) {
  .profile-info__summary {
    flex-direction: column;
    margin-bottom: 0;
  }
  .profile-info__summary-wrapper_first {
    margin-left: 0;
  }
  .profile-info__btn-comp {
    position: static;
  }
  .profile-info__name {
    margin-left: 0;
    position: static;
    text-align: center;
  }
  .profile-info__followers {
    margin-top: 10px;
  }
  .profile-info__about {
    margin-top: 50px;
  }
  .profile-info__title {
    margin-bottom: 10px;
  }
}
</style>