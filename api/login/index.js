import request from "../request.js"

// 登陆
function doLogin(data){
	return request({
		url:"/lejuClient/login/doLogin",
		data,
		method:"POST"
	})
}
//获取用户信息
function getMemberInfo(){
	return request({
		url:"/lejuClient/login/getMemberInfo",
		method:"get"
	})
}
export{doLogin,getMemberInfo}