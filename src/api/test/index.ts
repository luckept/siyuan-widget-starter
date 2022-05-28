import request from "@/utils/request";
import { apiOptions } from '@/types'

export function doTestFetch(options: apiOptions) {
  return request(options)
}