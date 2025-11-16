<script setup lang="ts">
import type { IContent } from '@/lib/interfaces/IContent'
import { profilePicture } from '@/lib/resources/profilePicture'
import { inject } from 'vue'

const content = inject<IContent>('content')
</script>

<template>
  <div class="profileBanner">
    <img :src="profilePicture" alt="Profile Picture" loading="eager" />
    <div class="description">
      <h2>{{ content?.hello }}</h2>
      <h2>{{ content?.welcome }}</h2>
      <p>{{ content?.description }}</p>
    </div>
  </div>
</template>

<style src="../assets/styles/profileBanner.css"></style>
