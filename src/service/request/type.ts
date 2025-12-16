// src/service/request/type.ts
//  封装网络请求相关类型

import type { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

// 定义通用的拦截器接口
export interface RequestInterceptors<T = AxiosResponse> {
  // 请求拦截
  requestInterceptor?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  // 响应拦截
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

// 扩展 Axios 自带的配置，加入我们自定义的拦截器
export interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: RequestInterceptors<T>
}