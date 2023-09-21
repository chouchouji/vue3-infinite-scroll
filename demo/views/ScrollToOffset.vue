<template>
  <var-counter
    style="margin-bottom: 16px"
    input-text-size="16px"
    input-width="80px"
    button-size="36px"
    :min="0"
    :max="10000000"
    :step="200"
    v-model="value"
  />
  <InfiniteScroll
    class="infinite-list"
    :width="600"
    :itemSize="80"
    :height="600"
    :scrollOffset="value"
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
import { ref } from 'vue'
import InfiniteScroll from '../../src/components/InfiniteScroll.vue'
import { useData } from '../hooks/useData'

const data = useData()
const value = ref(0)
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
