<script setup lang="ts">
import type { NotificationStatusType } from '@/lib/Enums/NotificationStatusType'
import { provide, reactive } from 'vue'

const notification = reactive({
  show: true,
  status: 'alert',
  description: 'nofitication created',
})

let notificationTimer = setTimeout(() => {}, 0)

const stopNotificationTimer = () => {
  notification.show = false

  clearTimeout(notificationTimer)
}

const showNotification = (status: NotificationStatusType, description: string) => {
  notification.status = status
  notification.description = description

  stopNotificationTimer()

  notification.show = true

  notificationTimer = setTimeout(() => {
    stopNotificationTimer()
  }, 3000)
}

provide('notification', {
  showNotification,
})
</script>

<template>
  <div>
    <slot></slot>
    <div v-if="notification.show" class="notification">
      <div :class="notification.status + ' status'"></div>
      <div class="content">
        <span>{{ notification.description }}</span>
        <i class="pi pi-times" @click="stopNotificationTimer"></i>
      </div>
    </div>
  </div>
</template>

<style src="../assets/styles/notification.css" />
