<template>
  <div class="header">
    <var-counter
      style="margin-bottom: 16px"
      input-text-size="16px"
      input-width="80px"
      button-size="36px"
      :min="0"
      :max="100000"
      :step="50"
      v-model="scrollToIndex"
    />
    <var-select style="margin-left: 16px" size="small" v-model="alignment" variant="outlined">
      <var-option label="auto" />
      <var-option label="start" />
      <var-option label="center" />
      <var-option label="end" />
    </var-select>
  </div>
  <InfiniteScroll
    class="infinite-list"
    :width="600"
    :itemSize="80"
    :height="600"
    :scrollToIndex="scrollToIndex"
    :scrollToAlignment="alignment"
    :data="data"
    v-slot="{ item, index }"
  >
    <div
      class="infinite-list-item"
      :style="{ background: index === scrollToIndex ? '#f5f5f5' : '' }"
    >
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
const scrollToIndex = ref(0)
const alignment = ref<'auto' | 'start' | 'center' | 'end'>('auto')
</script>

<style scoped>
.header {
  display: flex;
}

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
