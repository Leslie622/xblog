import axios from "axios"
import { Message } from 'element-ui'

// 网络请求进度条
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

function message(str) {
  Message({
    message: str,
    type: 'error',
    duration: 3000,
    customClass:"eleMessage"
  });
}

export function request(config) {
  const instance = axios.create({
    baseURL: "https://4xiaer.com:8001/land",
    timeout: 10000,
  })

  //请求拦截
  instance.interceptors.request.use(config => {
    Nprogress.start()
    return config
  }), err => {
    console.log(config);
    Message({
      message: '请求错误 : ' + err,
      type: 'error',
      duration: 3000
    })
  }

  //响应拦截
  instance.interceptors.response.use(response => {
    Nprogress.done()
    return response
  }, error => {
    if (error && error.response) {
      switch (error.response.status) {
        case 400: message("请求错误");
          break;
        case 401: message("未授权，请重新登陆(401)");
          break;
        case 403: message("拒绝访问(403)");
          break;
        case 404: message("请求出错(404)");
          break;
        case 408: message("请求超时(408)");
          break;
        case 500: message("服务器错误(500)");
          break;
        case 501: message("服务未实现(501)");
          break;
        case 502: message("网络错误(502)");
          break;
        case 503: message("服务不可用(503)");
          break;
        case 504: message("网络超时(504)");
          break;
        case 505: message('HTTP版本不受支持(505)');
          break;
        default: message(`连接出错${error.response.status}`);
      }
    } else {
      message("连接服务器失败!");
    }

    return Promise.reject(error)
  })

  return instance(config)
}
