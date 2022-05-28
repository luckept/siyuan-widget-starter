import axios from 'axios'
import { apiOptions } from '@/types'

const service = axios.create({
  // TODO: 暂时不支持使用 docker 的，后面用得上再改成 window.location.hostname
  baseURL: `http://127.0.0.1:6806/`,
  timeout: 8000
})

service.interceptors.request.use((req) => {
  return req
})

service.interceptors.response.use((res) => {
  const { code, data, msg } = res.data
  if (code === 0) {
    return data
  }
})

function request(options: apiOptions) {
  options.method = options.method ?? 'post'
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data
    delete options.data
  }
  return service(options)
}

export default request