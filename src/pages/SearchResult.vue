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

  <van-empty v-if="!userList || userList.length < 1" description="搜索结果为空" />

</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import myAxios from '../plugins/myAxios'
import qs from 'qs';

const route = useRoute();
const {tags} = route.query;

const userList = ref([])

onMounted(async () => {
  const userListData = await myAxios.get('/user/search/tags', {
    params: {
      tagNameList: tags
    },
    paramsSerializer: function (params) {
      return qs.stringify(params, {indices: false})
    }
  }).then((response) => {
    console.log("/user/search/tags success", response);
    return response.data?.data ?? [];
  }).catch((error) => {
    console.error("/user/search/tags success", error);
    return [];
  })
  if (userListData) {
    userListData.forEach(user => {
      if (user.tags) {
        user.tags = JSON.parse(user.tags)
      }
    })
    userList.value = userListData;
  }
})


</script>

<style scoped>

</style>
