<script setup lang="ts">
import type { IContent } from '@/lib/interfaces/IContent'
import { profilePicture } from '@/lib/resources/profilePicture'
import { inject } from 'vue'

const content = inject<IContent>('content')

// const welcomeMessage = ref<string>('')

// const welcomeWriter = () => {
//   let counter = 0
//   const timer = setInterval(() => {
//     console.log(welcomeMessage.value)
//     console.log(counter)

//     if (!content?.hello) return
//     welcomeMessage.value += content?.hello[counter] || ''

//     counter++
//   }, 700)

//   if (!content?.hello || counter == content?.hello.length - 1) clearInterval(timer)
// }

// welcomeWriter()
</script>

<template>
  <div class="profileBanner">
    <img :src="profilePicture" alt="Profile Picture" loading="eager" />
    <div class="description">
      <!-- <h2>{{ welcomeMessage }}</h2> -->
      <h2>
        {{ content?.welcome }}
        <span>_</span>
      </h2>

      <!-- <h2>{{ content?.welcome }}</h2> -->
      <p>{{ content?.description }}</p>
    </div>
  </div>
</template>

<style src="../assets/styles/profileBanner.css"></style>
