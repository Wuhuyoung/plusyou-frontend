<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model="editUser.currentValue"
          :name="editUser.editKey"
          :label="editUser.editName"
          :placeholder="`请输入${editUser.editName}`"
          :rules="[{ required: true, message: `请填写${editUser.editName}` }]"
          v-if="editUser.editKey!=='gender'"
      />
      <van-field :name="editUser.editKey" :label="editUser.editName" v-if="editUser.editKey==='gender'">
        <template #input>
          <van-radio-group v-model="editUser.currentValue" direction="horizontal">
            <van-radio name="0">男</van-radio>
            <van-radio name="1">女</van-radio>
          </van-radio-group>
        </template>
      </van-field>
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>

</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import myAxios from "../plugins/myAxios";
import { showSuccessToast, showFailToast } from 'vant';
import {getCurrentUser} from "../states/user";

const route = useRoute();
const router = useRouter();

// 修改后的字段
const editUser = ref({
  editKey: route.query.editKey,
  editName: route.query.editName,
  currentValue: route.query.currentValue,
})

let currentUser;
onMounted( async () => {
  const res = await getCurrentUser();
  currentUser = res;
})

// 修改
const onSubmit = async () => {
  if (!currentUser) {
    showFailToast("用户未登录");
    router.push('/user/login')
  }
  console.log(currentUser)
  // 向后台发送请求，修改用户信息
  const res = await myAxios.post('/user/update', {
    'id': currentUser.id,
    [editUser.value.editKey as string]: editUser.value.currentValue // js语法，可以动态形成请求的字段属性
  })
  if (res.code === 0 && res.data) {
    showSuccessToast('修改成功');
    router.back()
  } else {
    showFailToast('修改失败');
  }
};

</script>

<style scoped>

</style>
