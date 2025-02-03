import { mount } from '@vue/test-utils'
import ContactView from '../views/ContactView.vue'
import { setActivePinia, createPinia } from 'pinia'
import { expect, test, beforeEach } from 'vitest'

beforeEach(() => {
  setActivePinia(createPinia())
})

test('Корректное отображение фильтров и компонента листа поумолчанию', () => {
  const wrapper = mount(ContactView)

  // Assert the rendered text of the component
  expect(wrapper.findAll('[data-test="filters"]').length).toBe(1)
  expect(wrapper.findAll('[data-test="list"]').length).toBe(1)
})

