<script setup lang="ts">
import { onMounted } from 'vue'

const props = defineProps(['title'])

onMounted(() => {
  console.log(props.title)
})
</script>

<template>
  <div class="title">
    <h2>{{ title }}</h2>
    <div class="gradientLine"></div>
  </div>
</template>

<style src="../assets/styles/title.css"></style>
