<script setup lang="ts">
import FooterComponent from '@/components/FooterComponent.vue'
import ProfileBanner from '@/components/ProfileBannerComponent.vue'
import ProjectsComponent from '@/components/ProjectsComponent.vue'
import SchemaMenu from '@/components/SchemaMenuComponent.vue'
import SocialmediasComponent from '@/components/SocialmediasComponent.vue'
import StacksComponent from '@/components/StacksComponent.vue'
</script>

<template>
  <div class="home">
    <SchemaMenu />
    <main>
      <ProfileBanner />
      <StacksComponent />
      <ProjectsComponent />
      <SocialmediasComponent />
    </main>
    <FooterComponent />
  </div>
</template>

<style src="../assets/styles/home.css" />
