import config from '@/config'

export default {
  getStorage() {
    return JSON.parse(localStorage.getItem(config.namespace) ?? '{}')
  },
  setItem(key: string, val: any) {
    const storage = this.getStorage()
    storage[key] = val
    localStorage.setItem(config.namespace, JSON.stringify(storage))
  },
  getItem(key: string) {
    return this.getStorage()[key]
  },
  clearItem(key: string) {
    const storage = this.getStorage()
    delete storage[key]
    localStorage.setItem(config.namespace, JSON.stringify(storage))
  },
  clearAll() {
    localStorage.clear()
  }
}