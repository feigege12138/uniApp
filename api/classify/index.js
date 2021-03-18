import request from "../request.js"

function findAllCategory(){
	return request({
		url:"/lejuClient/productCategory/findAllCategory"
	})
	
}

export {findAllCategory}
