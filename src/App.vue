<script setup lang="ts">
import ContentProvider from './providers/ContentProvider.vue'
import NotificationPopUpProvider from './providers/NotificationPopUpProvider.vue'
import HomeView from './views/HomeView.vue'
</script>

<template>
  <ContentProvider>
    <NotificationPopUpProvider>
      <div class="background">
        <div class="container">
          <HomeView />
        </div>
      </div>
    </NotificationPopUpProvider>
  </ContentProvider>
</template>

<style src="./assets/styles/app.css"></style>
