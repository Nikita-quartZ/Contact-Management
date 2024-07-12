import { defineStore } from 'pinia'
import type { Contact, Filter } from '@/Types/Contact'

interface State {
  list: Contact[],
}

export const useContactsStore = defineStore({
  id: 'Contacts',
  state: (): State => ({
    list: [],
  }),
  actions: {
    async getContacts(params: Filter[] = []) {
      const request = localStorage.getItem('contacts')
      if (request) {
        let list = JSON.parse(request)
        params.forEach((filter) => {
          if (filter.key)
            list = list.filter((item) => item[filter.key].includes(filter.value))
        })
        this.list = list;
        return this.list;
      }
    },
    async createContact(params: Contact) {
      const data = localStorage.getItem('contacts')
      if (data) {
        const newData: Contact[] = JSON.parse(data)
        newData.push(params)
        localStorage.setItem('contacts', JSON.stringify(newData))
      } else {
        localStorage.setItem('contacts', JSON.stringify([params]))
      }
      this.getContacts()
    },
    async updateContact(params: Contact) {
      const data = localStorage.getItem('contacts')
      if (data) {
        let newData: Contact[] = JSON.parse(data)
        newData = newData.map((item) => {
          if (item.id === params.id) {
            return params
          } else {
            return item
          }
        })
        localStorage.setItem('contacts', JSON.stringify(newData))
      }
      this.getContacts()
    },
    async deleteContact(id: string) {
      const data = localStorage.getItem('contacts')
      if (data) {
        let newData: Contact[] = JSON.parse(data)
        newData = newData.filter((item) => item.id !== id)
        localStorage.setItem('contacts', JSON.stringify(newData))
      }
      this.getContacts()
    }
  },
});
