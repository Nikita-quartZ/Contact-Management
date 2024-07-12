<script setup lang="ts">
import { ref } from 'vue'
import type { PropType } from 'vue'
import type { Contact } from '@/types/Contact'
import ModalWindow from '@/components/Modals/ModalWindow.vue'
import { useContactsStore } from '@/stores/Contacts'

// Composable
const store = useContactsStore()

// Declare Options
const props = defineProps({
  contact: {
    type: Object as PropType<Contact>,
    default() {
      return []
    },
  }
})

// Variables
const modal = ref(false)

// Methods
const deleteUser = () => {
  store.deleteContact(props.contact.id)
  modal.value = false
}

</script>

<template>
  <!-- Modal button -->
  <button @click="modal = true" class="tw-px-4 tw-py-2 tw-bg-red-500 tw-rounded tw-text-white">
    Delete
  </button>
  <!--  -->

  <ModalWindow v-model="modal" :width="300">
    <!-- Delete form -->
    <div>
      <!-- Title -->
      <div class="tw-text-center tw-text-xl tw-mb-6">
        Delete Task
      </div>
      <!--  -->

      <!-- Actions -->
      <div class="tw-flex tw-justify-center">
        <button @click="modal = false" class="tw-px-3 tw-py-1 tw-text-red-500 tw-rounded tw-text-white tw-mr-2">
          Cancel
        </button>
        <button @click="deleteUser" class="tw-px-3 tw-py-1 tw-bg-red-500 tw-rounded tw-text-white tw-mr-2">
          Delete
        </button>
      </div>
      <!--  -->

    </div>
    <!--  -->
  </ModalWindow>
</template>