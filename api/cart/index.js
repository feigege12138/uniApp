import request from "../request.js"


// 添加购物车
function addCart(data){
	return request({
		url:"/lejuClient/cart/addCart",
		data:data,
		method:"POST"
	})
}

// 获取购物车列表
function findAllCartItem(){
	return request({
		url:"/lejuClient/cart/findAllCartItem",
	})
}


export{addCart,findAllCartItem}