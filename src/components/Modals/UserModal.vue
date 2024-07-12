<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import type { PropType } from 'vue'
import type { Contact } from '@/types/Contact'
import { v4 as uuidv4 } from 'uuid';
import { vMaska } from 'maska';
import ModalWindow from '@/components/Modals/ModalWindow.vue'
import { useContactsStore } from '@/stores/Contacts'

// Composable
const store = useContactsStore()

// Declare Options
const props = defineProps({
  edit: {
    type: Boolean,
    default: false,
  },
  contact: {
    type: Object as PropType<Contact>,
    default() {
      return []
    },
  }
})

// Variables
const modal = ref(false)

const form = ref({
  name: '',
  phone: '',
  email: '',
  id: '',
})

const options = reactive({
  mask: '+7 (###) ###-##-##',
});

// Computed Properties
const emailRules = computed(() => {
  return /.+@.+\..+/.test(form.value.email)
})

// Methods
const openModal = () => {
  modal.value = true
  form.value = Object.assign({}, props.contact)
}

const saveUser = () => {
  if (props.edit) {
    updateUser()
  } else {
    createUser()
  }
}

const createUser = () => {
  store.createContact({
    ...form.value,
    id: uuidv4(),
  })
  modal.value = false
}

const updateUser = () => {
  store.updateContact(form.value)
  modal.value = false
}
</script>

<template>
  <!-- Modal button -->
  <slot>
    <button v-if="!edit" @click="openModal" class="tw-px-4 tw-py-2 tw-bg-green-500 tw-rounded tw-text-white">
      Add User
    </button>
    <button v-else @click="openModal" class="tw-px-4 tw-py-2 tw-bg-blue-500 tw-rounded tw-text-white tw-mr-3">
      Edit
    </button>
  </slot>
  <!--  -->

  <ModalWindow v-model="modal">
    <!-- Create form -->
    <form @submit.prevent="saveUser">
      <div class="tw-text-center tw-text-xl">
        {{ !edit ? 'Create User' : 'Edit User' }}
      </div>

      <div class="tw-mb-2">
        <p>
          Name
        </p>
        <input v-model="form.name" class="tw-border tw-border-gray-500 tw-rounded tw-w-full tw-h-10 tw-px-2"
          type="text">
      </div>
      <div class="tw-mb-2">
        <p>
          Phone
        </p>
        <input v-model="form.phone" v-maska:[options]
          class="tw-border tw-border-gray-500 tw-rounded tw-w-full tw-h-10 tw-px-2" type="text">
      </div>
      <div class="tw-mb-2">
        <p>
          Email
        </p>
        <input v-model="form.email" class="tw-border tw-border-gray-500 tw-rounded tw-w-full tw-h-10 tw-px-2"
          type="text">
      </div>

      <div class="tw-flex tw-justify-end">
        <button @click="modal = false" class="tw-px-3 tw-py-1 tw-bg-red-500 tw-rounded tw-text-white tw-mr-2">
          Cancel
        </button>
        <button v-if="!edit" :disabled="!(form.name && form.phone && emailRules)" type="submit"
          class="tw-px-3 tw-py-1 tw-bg-green-500 disabled:tw-bg-slate-400 tw-rounded tw-text-white">
          Create
        </button>
        <button v-else :disabled="!(form.name && form.phone && emailRules)" type="submit"
          class="tw-px-3 tw-py-1 tw-bg-green-500 disabled:tw-bg-slate-400 tw-rounded tw-text-white">
          Save
        </button>
      </div>
    </form>
    <!--  -->
  </ModalWindow>
</template>