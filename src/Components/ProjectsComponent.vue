<script setup lang="ts">
import TitleComponent from './TitleComponent.vue'
import { projects } from '@/lib/resources/projects'
</script>

<template>
  <div class="projects">
    <TitleComponent title="Projects" />
    <ul>
      <li
        v-for="(project, index) in projects"
        :key="index"
        :style="{ 'background-image': 'url(' + project.backgroundImage + ')' }"
      >
        <div class="slider">
          <div class="description">
            <h3>{{ project.name }}</h3>
            <p>{{ project.description }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style src="../assets/styles/projects.css"></style>
