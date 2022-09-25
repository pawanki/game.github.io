import axios from 'axios'
import qs from 'qs'
//import config from './config.js'
import { Toast } from 'vant';

axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
//axios.defaults.headers['token']= '';

//if(localStorage.getItem('userInfo')){
//	axios.defaults.headers['token']= JSON.parse(localStorage.getItem('userInfo')).token;
//}



// 创建axios实例
const service = axios.create({
    //baseURL: config.baseURL,
    method: 'POST',
  // headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded'
  //       'Content-Type': 'application/json; charset=utf-8'
  //   },
  timeout: 100000 
})

// request 请求拦截器
service.interceptors.request.use(
  config => {
 //    if(localStorage.getItem('userInfo')){
	// 	axios.defaults.headers = {
	// 	  "token": JSON.parse(localStorage.getItem('userInfo')).token,
	// 	  "Content-Type": 'application/x-www-form-urlencoded',
	// 	 }
	// }
    config.data = qs.stringify(config.data);
    return config
  },
  error => {
    // 处理请求错误
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response 响应拦截器
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
      // console.log(response)
    const res = response.data
    // if the custom code is not 20000, it is judged as an error.
    // if(res.code == undefined){
    //     return res
    // }else if(res.code != 200) {
    //     console.log(res)
    //     // res = JSON.parse(res);
    //     Toast.fail(res.msg);
    // } else {
      return res
    // }

    
   
  },
  error => {   
    console.log(error) // for debug
    return Promise.reject(error)
  }
);



export default service