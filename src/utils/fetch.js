import axios from 'axios'
// import { Message } from 'element-ui'
import { Notify  } from 'vant';

// 测试:http://localhost:9090
// 上线:http://baidu.com
var baseURL = 'http://localhost:9999'

// 这是axios实例
const fetch = axios.create({
  baseURL: baseURL,
  timeout: 7000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})

// 添加请求拦截器，发生在请求发起之前
fetch.interceptors.request.use(config => {
  // console.log('请求拦截，ajax发起请求之前', config)
  // var token = localStorage.getItem('token')
  // config.headers.Authorization = token   // 用户鉴权
  return config
})


// 添加响应拦截器，发生客户端接收数据之前
fetch.interceptors.response.use(response => {
  var res = {}
  console.log('响应拦截，ajax接收数据之前', response)
  if (response.data && response.data.code===0) {
    res = response.data.data || {}
  } else {
    var msg = response.data.message || '请求错误';
		Notify({ type: 'warning', message: msg });
    // Message({
    //   message: msg,
    //   type: 'error',
    //   duration: 3 * 1000
    // })
  }
  return res
}, error => {
	console.log('调接口失败')
  // 调接口失败时，弹个框提示一个用户
  const msg = error.Message !== undefined ? error.Message : ''
	Notify({ type: 'warning', message: '网络错误'+msg });
  // Message({
  //   message: '网络错误' + msg,
  //   type: 'error',
  //   duration: 3 * 1000
  // })
  return Promise.reject(error)
})

export default fetch
