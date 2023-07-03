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
    <template v-if="active === 'index'">
      <Index></Index>
    </template>
    <template v-if="active === 'team'">
      <Team></Team>
    </template>
  </div>
 <!--tab栏-->
  <van-tabbar v-model="active" @change="onChange">
    <van-tabbar-item icon="home-o" name="index">主页</van-tabbar-item>
    <van-tabbar-item icon="friends-o" name="team">队伍</van-tabbar-item>
    <van-tabbar-item icon="user-o" name="user">用户</van-tabbar-item>
  </van-tabbar>

</template>

<script setup lang="ts">
import {ref} from "vue";
import {showToast} from "vant";
import Index from "../pages/Index.vue";
import Team from "../pages/Team.vue";

const onClickLeft = () => alert('向左');
const onClickRight = () => alert('向右');

const active = ref('index');
const onChange = (index) => showToast(`标签 ${index}`);

</script>

<style scoped>

</style>
