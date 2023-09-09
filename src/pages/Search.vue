<template>
<!--  搜索框-->
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
  <div style="padding: 4px 0">
    <div style="padding: 0 20px">
      <van-button round block type="primary" @click="searchResult">搜索</van-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {useRouter} from "vue-router";

const searchText = ref('');
const activeIds = ref([]);
const activeIndex = ref(0);

const router = useRouter()

// 原始标签列表
const originTags = [
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
// 标签列表
const tags = ref(originTags);
/**
 * 搜索标签
 * @param val
 */
const onSearch = (val) => {
  tags.value = originTags.map(parentTag => {
    const newTag = {...parentTag}
    newTag.children = parentTag.children.filter(item => item.text.includes(searchText.value))
    return newTag
  })
};

/**
 * 搜索用户
 */
const searchResult = () => {
  router.push({
    path: '/user/list',
    query: {
      tags: activeIds.value
    }
  })
}

const onCancel = () => {
  searchText.value = ''
  tags.value = originTags
};

// 移除标签
const close = (id) => {
  activeIds.value = activeIds.value.filter(item => {
    return item !== id  //将等于id的标签移除
  })
};

</script>

<style scoped>

</style>
