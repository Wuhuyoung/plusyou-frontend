<template>
  <template v-if="user">
    <van-row>
      <van-col span="24" style="text-align: center">
        <!--  头像-->
        <van-image
            round
            width="7rem"
            height="7rem"
            :src="user.avatarUrl"
            style="margin-top: 36px;">
          <template v-slot:loading>
            <van-loading type="spinner" size="20"/>
          </template>
          <template v-slot:error>加载失败</template>
        </van-image>
      </van-col>
    </van-row>
    <!--  个人信息-->
    <van-cell title="昵称" is-link :value="user.username" to="/user/edit"
              @click="edit('username', '昵称', user.username)" />
    <van-cell title="账号" :value="user.userAccount" />
    <van-cell title="性别" is-link :value="user.gender === 0 ? '男' : '女'" to="/user/edit"
              @click="edit('gender', '性别', user.gender)"/>
    <van-cell title="电话" is-link :value="user.phone" to="/user/edit"
              @click="edit('phone', '电话', user.phone)"/>
    <van-cell title="邮箱" is-link :value="user.email" to="/user/edit"
              @click="edit('email', '邮箱', user.email)"/>
    <van-cell title="编号" :value="user.planetCode" />
    <van-cell title="注册时间" :value="user.createTime" />
  </template>
</template>

<script setup lang="ts">
import {useRouter} from 'vue-router'
import {onMounted, ref} from "vue";
import {showFailToast} from "vant";
import {refreshAndGetCurrentUser} from "../states/user";
// const user:CurrentUser = {
//   id: 1,
//   username: 'admin',
//   userAccount: '123',
//   avatarUrl: 'https://typora-1314662469.cos.ap-shanghai.myqcloud.com/img/202303041615353.jpeg',
//   gender: 0,
//   phone: '1234567890',
//   email: '123858123@qq.com',
//   planetCode: '1',
//   userRole: 0,
//   tags: ['Java'],
//   status: 0,
//   createTime: new Date(),
// }

const user = ref();
const router = useRouter()

onMounted(async () => {
  const res = await refreshAndGetCurrentUser()
  if (res) {
    user.value = res;
  } else {
    showFailToast('获取用户信息失败，请登录')
    router.push('/user/login')
  }
})

// 跳转到编辑用户信息页
const edit = (editKey:string, editName:string, currentValue:string|number) => {
  router.push({
    path: '/user/edit',
    query: {
      editKey,
      editName,
      currentValue,
    }
  })
}

</script>

<style scoped>
.van-cell {
  padding-top: 14px;
  padding-bottom: 14px;
}
</style>
