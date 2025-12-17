// src/service/config/index.ts
//  服务相关配置文件

export const BASE_URL = process.env.NODE_ENV === 'development' ? '' : 'http://你的线上地址';
export const TIME_OUT = 10000;