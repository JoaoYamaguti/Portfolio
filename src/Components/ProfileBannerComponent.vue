<script setup lang="ts">
import type { IContent } from '@/lib/interfaces/IContent'
import { contentEn } from '@/lib/resources/content_en'
import { profilePicture } from '@/lib/resources/profilePicture'
import { inject, onMounted, ref, watch, type Ref } from 'vue'

const content = inject<Ref<IContent>>('content', ref(contentEn))

const welcomeMessage = ref<string>('')

let writerTimer = setInterval(() => {}, 0)

const stopWelcomeTimer = (timer: number) => {
  clearInterval(timer)
}

const writeWelcomeMessage = () => {
  let counter = 0

  welcomeMessage.value = ''

  stopWelcomeTimer(writerTimer)

  writerTimer = setInterval(() => {
    if (!content.value.welcome) return
    welcomeMessage.value += content.value.welcome[counter] || ''

    counter++

    if (!content.value.welcome || counter == content.value.welcome.length)
      stopWelcomeTimer(writerTimer)
  }, 100)
}

watch(content, writeWelcomeMessage)

onMounted(writeWelcomeMessage)
</script>

<template>
  <div class="profileBanner">
    <img :src="profilePicture" alt="Profile Picture" loading="eager" />
    <div class="description">
      <h2>
        {{ welcomeMessage }}
        <span>_</span>
      </h2>
      <p>{{ content.description }}</p>
    </div>
  </div>
</template>

<style src="../assets/styles/profileBanner.css"></style>
