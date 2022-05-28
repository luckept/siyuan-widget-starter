<script setup lang="ts">
import { doTestFetch } from '@/api/test'
import { testStore } from '@/store/test'

const store = testStore()

const doFetch = () => {
  console.log('fetch', fetch)
  doTestFetch({
    url: '/api/notebook/lsNotebooks'
  })
}
</script>

<template>
  <h1 @click="doFetch">Hello SiYuan Widget Starter</h1>
  <h1>{{ store.content }}</h1>
</template>