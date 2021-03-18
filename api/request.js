// 需求  封装的效果与以前vue的效果一致

// function a(data){
//   return request({
//     url:"",
//     method:"",
//     data
//   })
// }
// a()
// .then(res =>{

// })

import baseUrl from "./baseUrl"
function fun(config){
  return new Promise(function(resolve,rejected){
      uni.request({
        url: baseUrl + config.url,
        method:config.method ? (config.method).toUpperCase() : "GET",
        timeout:5000,
		header:{
			token:uni.getStorageSync("token")
		},
        data:config.data,
        success(res){
          resolve(res.data)
        },
        fail(res){
          rejected(res)
        }
      })
  })
}

export default fun;