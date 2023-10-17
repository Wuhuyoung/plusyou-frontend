<template>
  <UserCardList :userList="userList"/>
  <van-empty v-if="!userList || userList.length < 1 && onLoading === false" description="搜索结果为空" />

</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import myAxios from '../plugins/myAxios'
import qs from 'qs';
import UserCardList from "../components/UserCardList.vue";

const route = useRoute();
const {tags} = route.query;

const userList = ref([])
const onLoading = ref(true)

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
    return response?.data ?? [];
  }).catch((error) => {
    console.error("/user/search/tags success", error);
    return [];
  })
  onLoading.value = false;
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
