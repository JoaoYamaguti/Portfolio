<script setup lang="ts">
import { inject } from 'vue'
import TitleComponent from '@/Components/TitleComponent.vue'
import type { IContent } from '@/lib/interfaces/IContent'

const content = inject<IContent>('content')
</script>

<template>
  <div class="projects">
    <TitleComponent title="Projects" />
    <ul>
      <li
        v-for="(project, index) in content?.projects.list"
        :key="index"
        :style="{ 'background-image': 'url(' + project.backgroundImage + ')' }"
      >
        <div class="slider">
          <div class="description">
            <a :href="project.link" target="_blank">
              <h3>{{ project.name }}</h3>
            </a>
            <p>{{ project.description }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style src="../assets/styles/projects.css"></style>
