import request from "../request.js"

// 首页轮播
function bannerAds(){
	return request({
		url:"/lejuClient/home/bannerAds"
	})
}
//分类
function categorys(parentId){
	return request({
		url:`/lejuClient/home/categorys/${parentId}`
	})
}
//限时活动
function recommendList (){
	return request({
		url:"/lejuClient/home/recommendList"
	})
}
//hot
function hotList(){
	return request({
		url:"/lejuClient/home/hotList"
	})
}
function lejuLatestProducts(){
	return request({
		url:"/lejuClient/home/lejuLatestProducts"
	})
	}
// like
function saleMostProducts(){
	return request({
		url:"/lejuClient/home/saleMostProducts"
	})
}
export{bannerAds,categorys,recommendList,hotList,lejuLatestProducts,saleMostProducts}