<script setup lang="ts">
import type { ILanguage } from '@/lib/interfaces/ILanguages'
import 'primeicons/primeicons.css'
import { inject, onMounted, ref, watch } from 'vue'
import { languages } from '../lib/resources/languages'
import { themes } from '../lib/resources/themesResource'

const theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? ref('dark') : ref('light')

const language = inject<ILanguage>('language')

watch(theme, () => {
  document.body.classList.value = theme.value
})

onMounted(() => {
  document.body.classList.value = theme.value
})
</script>

<template>
  <header>
    <div class="langSelect">
      <img :src="language?.flag" alt="" />
      <select name="lang" id="lang" v-model="language">
        <option v-for="(lang, index) in languages" :key="index" :value="lang">
          {{ lang.label }}
        </option>
      </select>
    </div>

    <select name="theme" id="theme" v-model="theme" class="themeSelect">
      <option v-for="(theme, index) in themes" :key="index" :value="theme.key">
        {{ theme.label }}
      </option>
    </select>
  </header>
</template>

<style src="../assets/styles/schemaMenu.css"></style>
