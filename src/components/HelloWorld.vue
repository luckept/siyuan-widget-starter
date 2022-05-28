<script setup lang="ts">
import { doTestFetch } from '@/api/test'
import { testStore } from '@/store/test'
import { getCurrentInstance } from 'vue'

const store = testStore()

const doFetch = () => {
  doTestFetch({
    url: '/api/notebook/lsNotebooks'
  })
}
const { appContext } = getCurrentInstance()
const storage = appContext.config.globalProperties.$storage
storage.setItem('hello', 'world')

</script>

<template>
  <h1 @click="doFetch">Hello SiYuan Widget Starter</h1>
  <h1>{{ store.content }}</h1>
</template>