// src/service/index.ts
//  网络请求入口文件

import AppRequest from './request'
import { BASE_URL, TIME_OUT } from './config'

const appRequest = new AppRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  // 实例级别的拦截器
  interceptors: {
    requestInterceptor: (config) => {
      // 例如：在这里统一添加 Token
      const token = localStorage.getItem('token')
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    responseInterceptor: (res) => {
      // 例如：在这里判断后端返回的 code 码
      // if (res.code !== 200) { ... }
      return res
    }
  }
})

export default appRequest