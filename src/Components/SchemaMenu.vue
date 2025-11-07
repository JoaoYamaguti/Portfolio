<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'

const theme = ref('light')

watch(theme, () => {
  console.log(theme.value)
  document.body.classList.value = theme.value
})

onMounted(() => {
  console.log(theme.value)
  document.body.classList.value = theme.value
})
</script>

<template>
  <header>
    <select name="lang" id="lang">
      <option value="pt-br">Brazilian Portuguese</option>
      <option value="en">English</option>
    </select>

    <select name="theme" id="theme" v-model="theme">
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  </header>
</template>

<style src="../assets/styles/schemaMenu.css"></style>
