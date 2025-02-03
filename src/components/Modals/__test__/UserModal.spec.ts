import { mount } from '@vue/test-utils'
import UserModal from '../UserModal.vue'
import { setActivePinia, createPinia } from 'pinia'
import { expect, test, beforeEach } from 'vitest'

beforeEach(() => {
  setActivePinia(createPinia())
})

test('Корректное отображение Модального окна удаления', () => {
  const wrapper = mount(UserModal, {
    global: {
      stubs: {
        teleport: true
      }
    }
  })
  wrapper.find('[data-test="btn"]').trigger('click')

  // Assert the rendered text of the component
  expect(wrapper.text()).toContain('Add User')
})
