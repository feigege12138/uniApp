<template>
	<view>
		<view class="banner">	
			<swiper class="swiper" indicator-dots=true>
				<swiper-item v-for="item in bannerList" :key="item.id">
					<view class="swiper-item uni-bg-red">
						<image :src="item.pic" mode="widthFix" ></image>
					</view>
				</swiper-item>
				
			</swiper>
		</view>
		
		<!-- icon图 -->
		
		<view class="icon">
			<view v-for="item in iconList" :key="item.id" @tap="goList(item.id)">
				<image :src="item.icon" mode=""></image>
				<view>
					{{item.name}}
				</view>
			</view>
		</view>
		
		
		<!-- 限时活动 -->
		<view class="activity">
			<view class="left">
				
				<image src="data:image/png;base64,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" mode=""></image>
				<view >
					限时活动:
				</view>
			</view>
			<view class="right">
				 <swiper class="swiper" vertical=true autoplay=true>
				    <swiper-item  v-for="item in activityList" :key="item.id">
				       <view class="text">
				       	{{item.name}}
				       </view>
					   <view class="price">
					   	<view class="old">
					   		{{item.price}}
					   	</view>
						<view class="new">
							{{item.promotionPrice}}
						</view>
					   </view>
				    </swiper-item>
				</swiper>
			</view>
		</view>
		
		<view class="main">
		<!-- 热门推荐 -->
			<view class="hot">
				<view class="title">
					热门推荐
				</view>
				<view class="banner">
					<swiper class="swiper"  display-multiple-items=3>
						<swiper-item  v-for="item in hotList" :key="item.id"  @tap="goGoodInfo(item.id)">
							<view class="swiper-item uni-bg-red">
								<image :src="item.pic"></image>
								<view class="">
									{{item.name}}
								</view>
							</view>
						</swiper-item>
					</swiper>
				</view>
			</view>
		<!-- 新品推荐 -->
			<view class="new">
				<view class="title">
					新品推荐
				</view>
				<view class="newList">
					<navigator url="">
						
					</navigator>
					<view class="newIte" v-for="item in newList" :key="item.id"  @tap="goGoodInfo(item.id)">
						<view class="aaa">
						<image class="img" :src="item.pic" mode=""></image>
						<view class="text">
							<view class="name">
								{{item.name}}
							</view>
							<view class="price">
								价格{{item.price}}
							</view>
						</view>
						</view>
					</view>
				</view>
			</view>
			
		
		<!-- 猜你喜欢 -->
		
		<view class="like">
			<view class="title">
				猜你喜欢
			</view>
			<view class="like_list">
				<view class="item" v-for="item in likeList" :key="item.id" @tap="goGoodInfo(item.id)">
					<image :src="item.pic" mode=""></image>
					<view class="text">
						<view class="name">
							{{item.brandName}}
						</view>
						
						<view class="price">
							<view class="left">
								￥{{item.price}}
							</view>
							<view class="right">
								乐居
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		</view>
		
		
	</view>
	
	
</template>

<script>
	import {bannerAds,categorys,recommendList,hotList,lejuLatestProducts,saleMostProducts} from"../../api/home/index.js"
	export default{
		data(){
			return{
				bannerList:[],
				iconList:[],
				activityList:[],
				hotList:[],
				newList:[],
				likeList:[]
			}
		},
		onLoad(){
			
			// 首页轮播数据
			bannerAds().then(res=>{

				this.bannerList=res.data.items
			});
			//分类icon图标数据
			categorys("1308336521604599809").then(res=>{
				this.iconList=res.data.category.children
			})
			//限时活动
			recommendList().then(res=>{
				this.activityList=res.data.items
			})	
			//hot
			hotList().then(res=>{
				this.hotList=res.data.items
			})
			//new
			lejuLatestProducts().then(res=>{
				this.newList=res.data.productList
			})
			//like
			saleMostProducts().then(res=>{
				console.log(res)
				this.likeList=res.data.items
			})
		},
			
		methods:{
			goGoodInfo(res){
				
				getApp().globalData.goodsInfoId = res
				uni.navigateTo({
				    url: '/pages/home/goodsInfo/index?id='+res
				});
			},
			goList(res){
				getApp().globalData.goodsId = res
				uni.navigateTo({
				    url: '../classify/classifyList/index'
				});
				console.log(21123)
			}
		}
	}
</script>

<style  lang="scss" scoped>
@import "./home.scss"
</style>
