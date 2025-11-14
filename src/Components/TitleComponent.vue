<script setup lang="ts">
const props = defineProps(['title'])
</script>

<template>
  <div class="title">
    <h2>{{ props.title }}</h2>
    <div class="gradientLine"></div>
  </div>
</template>

<style src="../assets/styles/title.css"></style>
