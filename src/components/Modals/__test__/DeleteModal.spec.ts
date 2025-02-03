import { mount } from '@vue/test-utils'
import DeleteModal from '../DeleteModal.vue'
import { setActivePinia, createPinia } from 'pinia'
import { expect, test, beforeEach } from 'vitest'

beforeEach(() => {
  setActivePinia(createPinia())
})

test('Корректное отображение Модального окна удаления', () => {
  const wrapper = mount(DeleteModal, {
    global: {
      stubs: {
        teleport: true
      }
    }
  })
  wrapper.find('[data-test="btn"]').trigger('click')

  // Assert the rendered text of the component
  expect(wrapper.text()).toContain('Delete')
})
