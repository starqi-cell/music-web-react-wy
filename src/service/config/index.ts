
export const TIME_OUT = 10000

let BASE_URL = ''

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://localhost:3000'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://localhost:3000' // 生产环境地址，以后需要替换
} else {
  BASE_URL = 'http://localhost:3000'
}


export { BASE_URL }
