<script setup lang="ts">
import type { PropType } from 'vue'
import type { Contact } from '@/types/Contact'
import UserModal from '@/components/Modals/UserModal.vue'
import DeleteModal from '@/components/Modals/DeleteModal.vue'

// Declare Options
defineProps({
  contacts: {
    type: Object as PropType<Contact[]>,
    default() {
      return []
    },
  }
})
</script>

<template>
  <section>
    <TransitionGroup name="notification">
      <div v-for="contact in contacts" :key="contact.id" class="tw-flex tw-items-center tw-justify-between tw-mb-3">

        <!-- User Details -->
        <div class="tw-flex tw-items-center">
          <div class="tw-max-w-48 tw-min-w-48 tw-w-full tw-truncate">
            {{ contact.name }}
          </div>
          <div class="tw-max-w-48 tw-min-w-48 tw-w-full tw-truncate">
            {{ contact.phone }}
          </div>
          <div class="tw-max-w-48 tw-min-w-48 tw-w-full tw-truncate">
            {{ contact.email }}
          </div>
        </div>
        <!--  -->

        <!-- Actions -->
        <div>
          <UserModal :contact="contact" edit />
          <DeleteModal :contact="contact" />
        </div>
        <!--  -->
      </div>
    </TransitionGroup>
  </section>
</template>

<style lang="scss" scoped>
.notification-enter-active,
.notification-leave-active {
  transition: opacity 0.5s ease;
}

.notification-enter-from,
.notification-leave-to {
  opacity: 0;
}

.notification-icon {
  margin-top: 2px;
}
</style>
