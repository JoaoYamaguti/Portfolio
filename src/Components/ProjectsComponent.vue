<script setup lang="ts">
import { inject } from 'vue'
import TitleComponent from '@/Components/TitleComponent.vue'
import type { IContent } from '@/lib/interfaces/IContent'

const content = inject<IContent>('content')
</script>

<template>
  <div class="projects">
    <TitleComponent title="Projects" />
    <ul class="projectsForDesktop">
      <li
        v-for="(project, index) in content?.projects.list"
        :key="index"
        :style="{ 'background-image': 'url(' + project.backgroundImage + ')' }"
        class="project"
      >
        <a :href="project.repository" target="_blank">
          <div class="slider">
            <div class="description">
              <div class="title">
                <h3>{{ project.name }}</h3>
                <span :class="project.status == 'Finished' ? 'finished' : 'inProgress'">
                  {{ project.status }}
                </span>
              </div>
              <p>{{ project.description }}</p>
              <div class="technologies">
                <ul class="technologiesList">
                  <li v-for="(technology, index) in project.technologies" :key="index">
                    <h4>{{ technology.title }}</h4>
                    <ul class="icons">
                      <li v-for="(icon, index) in technology.icons" :key="index">
                        <img :src="icon" alt="" loading="lazy" />
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <!-- <div class="links">
                <a :href="project.link">{{ content?.projects.linkLabel }}</a>
                <a :href="project.repository">{{ content?.projects.repositoryLabel }}</a>
              </div> -->
            </div>
          </div>
        </a>
      </li>
    </ul>

    <ul class="projectsForMobile">
      <li v-for="(project, index) in content?.projects.list" :key="index" class="project">
        <div
          class="image"
          :style="{ 'background-image': 'url(' + project.backgroundImage + ')' }"
        ></div>
        <div class="description">
          <div class="title">
            <h3>{{ project.name }}</h3>
            <span :class="project.status == 'Finished' ? 'finished' : 'inProgress'">
              {{ project.status }}
            </span>
          </div>
          <p>{{ project.description }}</p>
          <div class="technologies">
            <ul class="technologiesList">
              <li v-for="(technology, index) in project.technologies" :key="index">
                <h4>{{ technology.title }}</h4>
                <ul class="icons">
                  <li v-for="(icon, index) in technology.icons" :key="index">
                    <img :src="icon" alt="" loading="lazy" />
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="links">
            <a v-if="project.link" :href="project.link">{{ content?.projects.linkLabel }}</a>
            <a :href="project.repository">{{ content?.projects.repositoryLabel }}</a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style src="../assets/styles/projects.css"></style>
