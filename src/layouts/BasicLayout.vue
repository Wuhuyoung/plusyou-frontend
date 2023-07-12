<template>
  <!--导航栏-->
  <van-nav-bar
      title="标题"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
  >
    <template #right>
      <van-icon name="search" size="18" />
    </template>
  </van-nav-bar>
  <!--内容-->
  <div id="content">
    <router-view></router-view>
  </div>
 <!--tab栏-->
  <van-tabbar @change="onChange" route>
    <van-tabbar-item to="/" icon="home-o" name="index">主页</van-tabbar-item>
    <van-tabbar-item to="/team" icon="friends-o" name="team">队伍</van-tabbar-item>
    <van-tabbar-item to="/user" icon="user-o" name="user">用户</van-tabbar-item>
  </van-tabbar>

</template>

<script setup lang="ts">
import {showToast} from "vant";
import {useRouter} from "vue-router";

const router = useRouter()
const onClickLeft = () => {
  router.push('/')
};
const onClickRight = () => {
  router.push('/search')
};

const onChange = (index) => showToast(`标签 ${index}`);

</script>

<style scoped>

</style>
