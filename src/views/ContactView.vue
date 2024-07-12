<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import _ from 'lodash';
import type { Filter } from '@/types/Contact'
import ContactFilter from '@/components/ContactFilter.vue'
import ContactList from '@/components/ContactList.vue'
import { useContactsStore } from '@/stores/Contacts'

// Composable
const store = useContactsStore()

// Variables
const filters = ref<Filter[]>([
  {
    label: 'Name',
    key: 'name',
    value: null,
  },
])

// Computed Properties
const filterData = computed(() => filters.value.map((item) => ({
  key: item.key,
  value: item.value,
})))

// Watchers
watch(filterData, () => {
  filter()
})

// Methods
const filter = _.debounce(() => {
  store.getContacts(filters.value)
}, 500)

// Created
store.getContacts()
</script>

<template>
  <div class="control">
    <header class="tw-pt-6">
      <h2 class="tw-text-3xl tw-mb-6">
        Contact Management
      </h2>
      <ContactFilter v-model:filters="filters" />
    </header>

    <main class="tw-pt-6">
      <ContactList :contacts="store.list" />
    </main>
  </div>
</template>

<style>
.control {
  margin: 0 auto;
  max-width: 1400px;
  width: 100%;
  padding: 0 15px;
}
</style>