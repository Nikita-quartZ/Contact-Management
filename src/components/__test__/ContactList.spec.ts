import { mount } from '@vue/test-utils'
import ContactList from '../ContactList.vue'
import { expect, test } from 'vitest'

test('В списке контактов 0 контактов', () => {
  const wrapper = mount(ContactList, {
    props: {
      contacts: []
    }
  })

  // Assert the rendered text of the component
  expect(wrapper.findAll('[data-test="items"]').length).toBe(0)
})

test('В списке контактов 1 контакт', () => {
  const wrapper = mount(ContactList, {
    props: {
      contacts: [
        {
          name: 'John',
          phone: '89991234567',
          email: 'test@gmail.com',
          id: '1',
        }
      ]
    },
    global: {
      stubs: {
        UserModal: {
          template: '<span />'
        },
        DeleteModal: {
          template: '<span />'
        }
      }
    }
  })

  // Assert the rendered text of the component
  expect(wrapper.findAll('[data-test="items"]').length).toBe(1)
})

test('В списке контактов 6 контактов', () => {
  const wrapper = mount(ContactList, {
    props: {
      contacts: [
        {
          name: 'John',
          phone: '89991234567',
          email: 'test@gmail.com',
          id: '1',
        },
        {
          name: 'John',
          phone: '89991234567',
          email: 'test@gmail.com',
          id: '1',
        },
        {
          name: 'John',
          phone: '89991234567',
          email: 'test@gmail.com',
          id: '1',
        },
        {
          name: 'John',
          phone: '89991234567',
          email: 'test@gmail.com',
          id: '1',
        },
        {
          name: 'John',
          phone: '89991234567',
          email: 'test@gmail.com',
          id: '1',
        },
        {
          name: 'John',
          phone: '89991234567',
          email: 'test@gmail.com',
          id: '1',
        },
      ]
    },
    global: {
      stubs: {
        UserModal: {
          template: '<span />'
        },
        DeleteModal: {
          template: '<span />'
        }
      }
    }
  })

  // Assert the rendered text of the component
  expect(wrapper.findAll('[data-test="items"]').length).toBe(6)
})