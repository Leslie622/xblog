import axios from "axios"
import { Message } from 'element-ui'

export function request(config) {
  const instance = axios.create({
    baseURL: "https://4xiaer.com:8001/land",
    timeout: 3000,
  })

  //请求拦截
  instance.interceptors.request.use(config => {
    return config
  }), err => {
    console.log(err);
  }

  //响应拦截
  instance.interceptors.response.use(response => {
    return response
  }, error => {
    Message({
      message: '网络请求错误',
      type: 'error',
      duration: 3000
    })
    return Promise.reject(error)
  })

  return instance(config)
}
