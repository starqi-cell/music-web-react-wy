// src/service/request/type.ts

import type { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

// 1. 引入缓存库的配置类型 (这会自动扩展 AxiosRequestConfig)
import type { CacheRequestConfig } from 'axios-cache-interceptor'

export interface RequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

// 2. 这里继承 CacheRequestConfig 而不是 AxiosRequestConfig
// 这样我们在调用 request 时就可以传入 cache: { ttl: ... } 了
export interface RequestConfig<T = AxiosResponse> extends CacheRequestConfig {
  interceptors?: RequestInterceptors<T>
}