/* 
对axio进行2次封装一个能发ajax请求的函数
*/

import axios from 'axios'

import { Indicator, MessageBox } from 'mint-ui'

const instance = axios.create({
  // baseURL: 'http://localhost:3000', // 出跨域请求问题
  baseURL: '/api', // 让代理服务器转发请求3000
  timeout: 20000 
})

// 添加请求拦截器
instance.interceptors.request.use((config) => {

  Indicator.open()
  return config

})

// 添加响应拦截器
instance.interceptors.response.use(
  response => {

    Indicator.close()
   
    return response.data
  },
  error => {
    Indicator.close()

    MessageBox('提示', '请求出错: ' + error.message)
    return new Promise(() => {}) // 返回一个pending状态的promise => 中断promie链
  }
)


export default instance

