<template>
  <var-app-bar title="vue3-infinite-scroll">
    <template #right>
      <var-button
        color="transparent"
        text-color="#fff"
        round
        text
        @click="goGithub()"
      >
        <var-icon name="github" :size="30" />
      </var-button>
    </template>
  </var-app-bar>
</template>

<script setup lang="ts">
const goGithub = () => {
  window.open('https://www.baidu.com', 'blank')
}
</script>