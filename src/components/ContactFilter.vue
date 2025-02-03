<script setup lang="ts">
import UserModal from '@/components/Modals/UserModal.vue'
import type { Filter } from '@/types/Contact'

// Declare Options
const filters = defineModel<Filter[]>('filters', {
  default: []
})

</script>

<template>
  <div class="tw-w-full">
    <div
      v-for="filter in filters" :key="filter.label"
      data-test="filter"
      class="tw-flex tw-justify-between tw-items-end"
    >
      <!-- Filter Item -->
      <div>
        <p class="tw-text-sm tw-pl-1">
          {{ filter.label }}
        </p>
        <input type="text" v-model="filter.value"
          class="tw-border tw-border-gray-500 tw-rounded tw-w-full tw-h-10 tw-px-2">
      </div>
      <!--  -->

      <UserModal />
    </div>
  </div>
</template>