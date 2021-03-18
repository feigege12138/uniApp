import request from "@/api/request.js"

function findProductList(start,limit,data){
	return request({
		url:`/lejuClient/product/findProductList/${start}/${limit}`,
		data:data,
		method:"POST"
	})
}

function productDetail(productId){
	return request({
		url:`/lejuClient/product/productDetail/${productId}`,
		method:"get"
	})
}
export {
	findProductList,productDetail
}