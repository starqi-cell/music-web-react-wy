// src/service/request/index.ts

import axios from 'axios'
import { setupCache } from 'axios-cache-interceptor'
import type { AxiosCacheInstance } from 'axios-cache-interceptor'

import type { RequestConfig } from './type'

class AppRequest {
  instance: AxiosCacheInstance

  constructor(config: RequestConfig) {
    this.instance = setupCache(axios.create(config), {
      ttl: 1000 * 60 * 5, 
      debug: console.log, 
    })

    this.instance.interceptors.request.use(
      config.interceptors?.requestInterceptor,
      config.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      config.interceptors?.responseInterceptor,
      config.interceptors?.responseInterceptorCatch
    )

    this.instance.interceptors.response.use(
      (res) => {
        return res.data as any
      },
      (err) => {
        console.error('网络请求失败:', err)
        return Promise.reject(err)
      }
    )
  }

  request<T = any>(config: RequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          resolve(res as T)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T = any>(config: RequestConfig<T>) {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T = any>(config: RequestConfig<T>) {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T = any>(config: RequestConfig<T>) {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T = any>(config: RequestConfig<T>) {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default AppRequest