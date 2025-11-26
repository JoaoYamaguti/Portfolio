<script setup lang="ts">
import TitleComponent from '@/Components/TitleComponent.vue'
import { NotificationStatusType } from '@/lib/Enums/NotificationStatusType'
import type { IContent } from '@/lib/interfaces/IContent'
import { contentEn } from '@/lib/resources/content_en'
import { socialMedias } from '@/lib/resources/socialMedias'
import { inject, ref, type Ref } from 'vue'

const content = inject<Ref<IContent>>('content', ref(contentEn))

const nofitication = inject<{
  showNotification: (status: NotificationStatusType, description: string) => void
}>('notification')

const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text)
    nofitication?.showNotification(NotificationStatusType.ok, content.value.EmailCopiedMessage)
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <div class="socialMedias">
    <TitleComponent :title="content?.socialMediasTitle" />
    <ul>
      <li v-for="(media, index) in socialMedias" :key="index">
        <a v-if="media.name !== 'Email'" :href="media.link" :class="media.name" target="_blank">
          <i :class="'pi ' + media.icon"></i>
          <span>{{ media.name }}</span>
          <i class="pi pi-link"></i>
        </a>
        <button
          v-if="media.name == 'Email'"
          :class="media.name"
          @click="copyToClipboard(media.link)"
        >
          <i :class="'pi ' + media.icon"></i>
          <span>{{ media.name }}</span>
          <i class="pi pi-copy"></i>
        </button>
      </li>
    </ul>
    <p>
      {{ content.resumeLabel }}
      <a href="./files/Perfil_Tec-JoaoVictorYamagutiAlves.pdf" target="_blank">{{
        content.resumeClickLabel
      }}</a>
    </p>
  </div>
</template>

<style src="../assets/styles/socialMedias.css" />
