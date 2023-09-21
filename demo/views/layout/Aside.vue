<template>
  <div class="sidebar">
    <div class="link-container">
      <div
        class="link"
        v-for="(link, index) in links"
        :key="link.to"
        @click="activeIndex = index"
        :class="{ 'active-link': activeIndex === index }"
      >
        <var-link :to="link.to" text-color="#5d5d5d" underline="none">{{ link.title }}</var-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const links = ref([
  {
    to: '/equal/height',
    title: 'Elements of equal height'
  },
  {
    to: '/equal/width',
    title: 'Horizontal list'
  },
  {
    to: '/dynamic/height',
    title: 'Dynamic height'
  },
  {
   to: '/scroll/index',
   title: 'Scroll to index'
  },
  {
    to: '/scroll/offset',
    title: 'Scroll to offset'
  }
])
const activeIndex = ref(0)
</script>

<style scoped>
.sidebar {
  width: 280px;
  position: absolute;
  background-color: #fff;
  box-shadow: 3px 0 6px rgba(0, 0, 0, 0.24);
}

.link-container {
  margin-top: 25px;
  padding: 0;
}

.link {
  height: 45px;
  padding: 5px 25px;
  line-height: 45px;
  cursor: pointer;
}

.link:hover {
  background: #eee;
}

.active-link {
  background: #ddd;
}
</style>
