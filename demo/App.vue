<template>
  <div class="container">
    <Header></Header>
    <div class="main">
      <div class="aside">
        <Aside></Aside>
      </div>
      <div class="content">
        <div><router-view></router-view></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from './views/layout/Header.vue'
import Aside from './views/layout/Aside.vue'
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.main {
  flex: 1;
  display: flex;
}

.aside {
  width: 200px;
}

.content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
