<script setup lang="ts">
import ContentProvider from './providers/ContentProvider.vue'
import HomeView from './views/HomeView.vue'
</script>

<template>
  <ContentProvider>
    <div class="background">
      <div class="container">
        <HomeView />
      </div>
    </div>
  </ContentProvider>
</template>

<style src="./assets/styles/app.css"></style>
