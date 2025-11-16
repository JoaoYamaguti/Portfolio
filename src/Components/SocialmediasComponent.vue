<script setup lang="ts">
import { socialMedias } from '@/lib/resources/socialMedias'
import TitleComponent from './TitleComponent.vue'
import { inject } from 'vue'
import type { IContent } from '@/lib/interfaces/IContent'

const content = inject<IContent>('content')
</script>

<template>
  <div class="socialMedias">
    <TitleComponent :title="content?.socialMediasTitle" />
    <ul>
      <li v-for="(media, index) in socialMedias" :key="index">
        <a :href="media.link" :class="media.name" target="_blank">
          <i :class="'pi ' + media.icon"></i>
          <span>{{ media.name }}</span>
          <i v-if="media.name == 'Email'" class="pi pi-copy"></i>
          <i v-else class="pi pi-link"></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<style src="../assets/styles/socialMedias.css" />
