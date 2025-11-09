<script setup lang="ts">
import 'primeicons/primeicons.css'
import { inject, onMounted, ref, watch } from 'vue'
import { languages } from '../lib/resources/languages'
import { themes } from '../lib/resources/themesResource'

const theme = ref('light')

const lang = inject('lang')

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
      <img :src="lang.language.flag" alt="" />
      <select name="lang" id="lang" v-model="lang.language">
        <option v-for="(lang, index) in languages" :key="index" :value="lang">
          {{ lang.label }}
        </option>
      </select>
    </div>

    <select name="theme" id="theme" v-model="theme">
      <option v-for="(theme, index) in themes" :key="index" :value="theme.key">
        {{ theme.label }}
      </option>
    </select>
  </header>
</template>

<style src="../assets/styles/schemaMenu.css"></style>
