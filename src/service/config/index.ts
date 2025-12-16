// src/service/config/index.ts
//  服务相关配置文件

export const TIME_OUT = 10000

let BASE_URL = ''

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://localhost:3000'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://localhost:3000' 
} else {
  BASE_URL = 'http://localhost:3000'
}


export { BASE_URL }
