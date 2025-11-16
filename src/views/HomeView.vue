<script setup lang="ts">
import FooterComponent from '@/Components/FooterComponent.vue'
import ProfileBanner from '@/Components/ProfileBannerComponent.vue'
import ProjectsComponent from '@/Components/ProjectsComponent.vue'
import SchemaMenu from '@/Components/SchemaMenuComponent.vue'
import SocialmediasComponent from '@/Components/SocialmediasComponent.vue'
import StacksComponent from '@/Components/StacksComponent.vue'
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
