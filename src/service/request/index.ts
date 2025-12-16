// src/service/request/index.ts
//  封装网络请求类

import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { RequestConfig } from './type'

class AppRequest {
  instance: AxiosInstance

  constructor(config: RequestConfig) {
    // 1. 创建 axios 实例
    this.instance = axios.create(config)

    // 2. 注册实例级别的拦截器 (对应 new AppRequest 传入的 interceptors)
    // 这种拦截器通常用于：携带 Token、特定的 Loading 逻辑
    this.instance.interceptors.request.use(
      config.interceptors?.requestInterceptor,
      config.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      config.interceptors?.responseInterceptor,
      config.interceptors?.responseInterceptorCatch
    )

    // 3. 注册全局通用的拦截器 (所有实例都共享的逻辑)
    // 例如：解包 data，统一处理 HTTP 错误码
    this.instance.interceptors.response.use(
      (res) => {
        // 直接返回 res.data，这样前端拿到的就是后端返回的真实数据
        return res.data
      },
      (err) => {
        // 这里可以做统一的错误提示，例如 element-plus 的 ElMessage
        console.error('网络请求失败:', err)
        return Promise.reject(err)
      }
    )
  }

  // 4. 封装核心 request 方法
  request<T = any>(config: RequestConfig<T>): Promise<T> {
    // 注意：单次请求的拦截器（original代码里那部分）其实很少用到，
    // 为了代码清晰，建议去掉。如果真的需要，可以在这里处理，但通常不需要。
    
    return new Promise((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          resolve(res)
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