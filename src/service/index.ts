import { BASE_URL, TIME_OUT } from './config'
import AppRequest from './request'

const AppRequest = new AppRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn: (config) => {
      return config
    }
  }
})

export default AppRequest
