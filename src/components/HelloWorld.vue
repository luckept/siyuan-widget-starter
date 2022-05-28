<script setup lang="ts">
import { doTestFetch } from '@/api/test'

const doFetch = () => {
  console.log('fetch', fetch)
  doTestFetch({
    url: '/api/notebook/lsNotebooks'
  })
}
</script>

<template>
  <h1 @click="doFetch">Hello SiYuan Widget Starter</h1>
</template>