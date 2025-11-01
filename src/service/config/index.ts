
export const TIME_OUT = 10000

let BASE_URL = ''

if ((import.meta as any).env.VITE_NODE_ENV === 'development') {
  BASE_URL = 'http://localhost:3000'
} else if ((import.meta as any).env.VITE_NODE_ENV === 'production') {
  BASE_URL = 'http://localhost:3000'
} else {
  BASE_URL = 'http://localhost:3000'
}

export { BASE_URL }
