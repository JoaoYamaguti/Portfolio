<script setup lang="ts">
import { contentPtBr } from '@/lib/resources/content_pt-br'
import { contentEn } from '@/lib/resources/content_en'
import { languages } from '@/lib/resources/languages'
import { nextTick, provide, ref } from 'vue'
import type { ILanguage } from '@/lib/interfaces/ILanguages'
import type { IContent } from '@/lib/interfaces/IContent'

const language = ref(languages[0] as ILanguage)
const content = ref(contentEn as IContent)

const changeLanguage = (lang: ILanguage) => {
  language.value = lang

  nextTick()

  if (language.value.key == 'en') content.value = contentEn
  if (language.value.key == 'pt-br') content.value = contentPtBr
}

provide('lang', { language, changeLanguage })
provide('content', content)
</script>

<template>
  <slot></slot>
</template>
