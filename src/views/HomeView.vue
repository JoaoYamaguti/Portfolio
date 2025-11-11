<script setup lang="ts">
import FooterComponent from '@/Components/FooterComponent.vue'
import PortfolioComponent from '@/Components/PortfolioComponent.vue'
import ProfileBanner from '@/Components/ProfileBannerComponent.vue'
import SchemaMenu from '@/Components/SchemaMenuComponent.vue'
import StacksComponent from '@/Components/StacksComponent.vue'
</script>

<template>
  <div class="home">
    <SchemaMenu />
    <main>
      <ProfileBanner />
      <StacksComponent />
      <PortfolioComponent />
    </main>
    <FooterComponent />
  </div>
</template>

<style src="../assets/styles/home.css" />
