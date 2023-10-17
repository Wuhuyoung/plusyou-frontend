<template>
  <van-card
      v-for="user in userList"
      :desc="user.profile"
      :title="user.username"
      :thumb="user.avatarUrl"
  >
    <template #tags>
      <van-tag plain type="primary" v-for="tag in user.tags" style="margin-right: 5px; margin-top: 5px">
        {{ tag }}
      </van-tag>
    </template>
    <template #footer>
      <van-button plain type="primary" size="mini">联系我</van-button>
    </template>
  </van-card>
</template>

<script setup lang="ts">
// 用户卡片列表组件
  import {CurrentUser} from "../models/user";

  interface UserCardListProps {
    userList: CurrentUser[];
  }

  const props = defineProps<UserCardListProps>();
</script>

<style scoped>

</style>
