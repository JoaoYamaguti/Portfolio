<script setup lang="ts">
import FooterComponent from '@/Components/FooterComponent.vue'
import ProfileBanner from '@/Components/ProfileBannerComponent.vue'
import SchemaMenu from '@/Components/SchemaMenuComponent.vue'
</script>

<template>
  <div class="home">
    <SchemaMenu />
    <main>
      <ProfileBanner />
    </main>
    <FooterComponent />
  </div>
</template>

<style src="../assets/styles/home.css" />
