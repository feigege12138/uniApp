import request from "../request.js"


function findBrandsByPage(start,limit){
	return request({
		url:`/lejuClient/brand/findBrandsByPage/${start}/${limit}`
	})
}
function productArticle(start,limit){
	return request({
		url:`/lejuClient/productArticle/findArticleByPage/${start}/${limit}`
	})
}



export {findBrandsByPage,productArticle}