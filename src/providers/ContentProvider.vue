<script setup lang="ts">
import type { IContent } from '@/lib/interfaces/IContent'
import type { ILanguage } from '@/lib/interfaces/ILanguages'
import { contentEn } from '@/lib/resources/content_en'
import { contentPtBr } from '@/lib/resources/content_pt-br'
import { languages } from '@/lib/resources/languages'
import { provide, ref, watch } from 'vue'

const language = ref(languages[0] as ILanguage)
const content = ref(contentEn as IContent)

watch(language, () => {
  if (language.value.key == 'en') content.value = contentEn
  if (language.value.key == 'pt-br') content.value = contentPtBr
})

provide('language', language)
provide('content', content)
</script>

<template>
  <slot></slot>
</template>
