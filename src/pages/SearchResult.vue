<template>
  <van-card
      v-for="user in userList"
      :desc="user.profile"
      :title="user.username"
      :thumb="user.avatarUrl"
  >
    <template #tags>
      <van-tag plain type="primary" v-for="tag in user.tags" style="margin-right: 5px; margin-top: 5px">
        {{tag}}
      </van-tag>
    </template>
    <template #footer>
      <van-button plain type="primary" size="mini" >联系我</van-button>
    </template>
  </van-card>

</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
import {ref} from "vue";

const route = useRoute();
const {tags} = route.query;

const mockUser = {
  id: 123,
  username: 'Han',
  planetCode: '123',
  userAccount: '12469126',
  avatarUrl: 'https://typora-1314662469.cos.ap-shanghai.myqcloud.com/img/202303041615353.jpeg',
  profile: '精神小伙，目前还有头发，66666666666666666666666666',
  gender: 0,
  phone: '13889203716',
  email: '123979612@qq.com',
  userRole: 0,
  tags: ['Java', 'Go']
}
const userList = ref([mockUser])

</script>

<style scoped>

</style>
