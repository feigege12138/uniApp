import request from "../request.js"

// 获取订单
function findAllOrders(){
	return request({
		url:"/lejuClient/order/findAllOrders",
		method:"get"
	})
}
export{findAllOrders}