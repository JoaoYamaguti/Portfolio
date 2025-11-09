<script setup lang="ts">
import type { IContent } from '@/lib/interfaces/IContent'
import { profilePicture } from '@/lib/resources/profilePicture'
import { inject } from 'vue'

const content = inject<IContent>('content')
</script>

<template>
  <div class="profileBanner">
    <img :src="profilePicture" alt="Profile Picture" />
    <div class="description">
      <span>{{ content?.welcome }}</span>
      <p></p>
    </div>
  </div>
</template>

<style src=""></style>
