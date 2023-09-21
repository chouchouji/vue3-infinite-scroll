<template>
  <InfiniteScroll
    class="infinite-list"
    :width="600"
    :itemSize="getItemSize"
    :height="600"
    :data="data"
    v-slot="{ item, index }"
  >
    <div class="infinite-list-item">
      <div>Item - {{ index }}</div>
      <div>{{ item.text }}</div>
    </div>
  </InfiniteScroll>
</template>

<script setup lang="ts">
import InfiniteScroll from '../../src/components/InfiniteScroll.vue'

import { useData } from '../hooks/useData'

const data = useData()

const getItemSize = (idx: number): number => {
  switch (idx % 4) {
    case 1:
      return 120
    case 2:
      return 160
    case 3:
      return 200
    default:
      return 80
  }
}
</script>

<style scoped>
.infinite-list {
  border: 1px solid #ccc;
}

.infinite-list-item {
  width: 100%;
  height: 100%;
  overflow: hidden;
  color: #555;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
}

.infinite-list-item:hover {
  background-color: #dbdbdb;
}

.infinite-list-item div:first-child {
  font-size: 18px;
  padding: 10px 0 10px 10px;
  color: rgba(0, 0, 0, 0, 85);
  font-weight: 500;
}

.infinite-list-item div:last-child {
  font-size: 14px;
  padding: 0 0 0 10px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0, 50);
}
</style>
