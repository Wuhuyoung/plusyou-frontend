<template>
  <UserCardList :userList="userList"/>
  <van-empty v-if="!userList || userList.length < 1 && onLoading === false" description="数据为空" />
</template>

<script setup lang="ts">
import {useRoute, useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import myAxios from '../plugins/myAxios'
import UserCardList from "../components/UserCardList.vue";
import {showFailToast} from "vant";

const route = useRoute();
const router = useRouter();

const userList = ref([])
const onLoading = ref(true)

onMounted(async () => {
  const userListData = await myAxios.get('/user/recommend', {
    params: {
      pageNum: 1,
      pageSize: 10,
    },
  }).then((response) => {
    console.log("/user/recommend success", response);
    if (response.code === 40101) {
      showFailToast('请登录')
      router.push("/user/login");
    }
    return response?.data?.records ?? [];
  }).catch((error) => {
    console.error("/user/recommend success", error);
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
  onLoading.value = false;
})


</script>

<style scoped>

</style>
