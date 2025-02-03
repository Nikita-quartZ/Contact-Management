import { mount } from '@vue/test-utils'
import ContactFilter from '../ContactFilter.vue'
import { expect, test } from 'vitest'

test('В списке контактов 0 фильтров', () => {
  const wrapper = mount(ContactFilter, {
    props: {
      filters: []
    }
  })

  // Assert the rendered text of the component
  expect(wrapper.findAll('[data-test="filter"]').length).toBe(0)
})

test('В списке контактов 1 фильтр', () => {
  const wrapper = mount(ContactFilter, {
    props: {
      filters: [
        {
          label: 'Filter',
          key: 'filter',
          value: 0
        }
      ]
    },
    global: {
      stubs: {
        UserModal: {
          template: '<span />'
        },
      }
    }
  })

  // Assert the rendered text of the component
  expect(wrapper.findAll('[data-test="filter"]').length).toBe(1)
})

test('В списке контактов 6 фильтров', () => {
  const wrapper = mount(ContactFilter, {
    props: {
      filters: [
        {
          label: 'Filter',
          key: 'filter',
          value: 0
        },
        {
          label: 'Filter',
          key: 'filter',
          value: 0
        },
        {
          label: 'Filter',
          key: 'filter',
          value: 0
        },
        {
          label: 'Filter',
          key: 'filter',
          value: 0
        },
        {
          label: 'Filter',
          key: 'filter',
          value: 0
        },
        {
          label: 'Filter',
          key: 'filter',
          value: 0
        },
      ]
    },
    global: {
      stubs: {
        UserModal: {
          template: '<span />'
        },
      }
    }
  })

  // Assert the rendered text of the component
  expect(wrapper.findAll('[data-test="filter"]').length).toBe(6)
})