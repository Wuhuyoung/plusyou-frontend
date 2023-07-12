<template>
  <form action="/">
    <van-search
        v-model="searchText"
        show-action
        placeholder="请输入要搜索的标签"
        @search="onSearch"
        @cancel="onCancel"
    />
  </form>
  <van-divider>已选标签</van-divider>
  <van-divider v-if="activeIds.length === 0">暂无标签</van-divider>
  <van-space wrap style="padding-left: 10px; padding-right: 16px">
    <van-tag v-for="id of activeIds" closeable size="medium" type="primary" @close="close(id)">
      {{id}}
    </van-tag>
  </van-space>
  <van-divider>选择标签</van-divider>
  <van-tree-select
      v-model:active-id="activeIds"
      v-model:main-active-index="activeIndex"
      :items="tags"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { showToast } from 'vant';

const searchText = ref('');
const onSearch = (val) => showToast(val);
const onCancel = () => showToast('取消');

const show = ref(true);
const activeIds = ref([]);
const activeIndex = ref(0);
// 标签列表
const tags = [
  {
    text: '性别',
    children: [
      { text: '男', id: '男' },
      { text: '女', id: '女' },
    ],
  },
  {
    text: '方向',
    children: [
      { text: 'Java', id: 'Java' },
      { text: 'Go', id: 'Go' },
      { text: 'C++', id: 'C++' },
      { text: 'Android', id: 'Android' },
      { text: 'JavaScript', id: 'JavaScript' },
    ],
  },
];

// 移除标签
const close = (id) => {
  activeIds.value = activeIds.value.filter(item => {
    return item !== id
  })
};

</script>

<style scoped>

</style>
