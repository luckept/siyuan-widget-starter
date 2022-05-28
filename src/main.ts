import { createApp } from 'vue'
import App from '@/App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from '@/router'
import { createPinia } from 'pinia'
import storage from '@/utils/storage'

const app = createApp(App)
app.config.globalProperties.$storage = storage
app.use(ElementPlus)
app.use(router)
app.use(createPinia())
app.mount('#app')
