<script setup lang="ts">
import { stacks } from '@/lib/resources/stacks'
import TitleComponent from '@/components/TitleComponent.vue'
</script>

<template>
  <div class="stacks">
    <TitleComponent title="Stacks" />
    <ul>
      <li v-for="(stack, index) in stacks" :key="index">
        <img :src="stack.icon" :alt="stack.icon" />
        <span>{{ stack.name }}</span>
      </li>
    </ul>
  </div>
</template>

<style src="../assets/styles/stacks.css" />
