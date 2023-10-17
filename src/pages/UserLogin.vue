<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model="account"
          name="account"
          label="账号"
          placeholder="请输入账号"
          :rules="[{ required: true, message: '请填写账号' }]"
      />
      <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="请输入密码"
          :rules="[{ required: true, message: '请填写密码' }]"
      />
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
</template>

<script setup lang="ts">
import {useRouter} from 'vue-router'
import {ref} from "vue";
import myAxios from "../plugins/myAxios";
import { showSuccessToast, showFailToast } from 'vant';

const router = useRouter()

const account = ref('');
const password = ref('');
const onSubmit = async (values) => {
  const res = await myAxios.post('/user/login', {
    account: account.value,
    password: password.value
  })
  if (res.code === 0 && res.data) {
    showSuccessToast('登录成功');
    router.replace('/'); // 如果使用push，那么回退后是登录界面，而用replace回退后不会回到登录界面
  } else {
    showFailToast('登录失败，' + res.description);
  }
};
</script>

<style scoped>

</style>
