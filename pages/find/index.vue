<template>
	<view >
		<view class="nav">
			<view class="nav-item" v-for="(item,index) in titleList" :key="index" :class="{border:index == current}" @tap="bod(index)">
				{{item.name}}
			</view>
		</view>
		
		<view class="main">
			<!-- 文章 -->
			<view class="text" v-for="(item,index) in infoList" :key="index" v-if="dsp" >
				<view class="img">
				<image :src="item.coverImg" mode=""></image>
				<view class="top">
					<view class="title">
						{{item.title}}
					</view>
					<view class="name">
						{{item.author}}
					</view>
				</view>
				</view>
				
				<view class="bottom">
					<view class="left">
						<view class="icon">
							<uni-icons type="paperclip">
							</uni-icons>
						</view>
						<view class="num">
							{{item.viewCount}}
						</view>
					</view>
					<view class="right" @tap="icons(item,index)">
						<uni-icons :type="item.collectCount? 'heart-filled':'heart' " size="30"></uni-icons>
					</view>
				</view>
			
			</view>
			
			<!-- //商品 -->
			<view class="goods" v-show="dsps">
				
			</view>
			
			
		</view>
	</view>
</template>

<script>
	import {findBrandsByPage,productArticle} from"../../api/find/index.js"
	export default{
		
		data(){
			return{
				titleList:[
					{
						name:"精选文章",
					},
					{
						name:"品牌列表",
						
					}
				],
				current:0,
				infoList:[],
				index:1,
				dsp:true,
				dsps:false,
				
		
			}
		},
		onLoad(res){
			productArticle(1,5).then(res=>{
				console.log(res)
				this.infoList=res.data.rows
				// var find=uni.getStorageSync("find")
				// if(find.length==0){
					
				// }else{
				// 	var items=find.find(ele=>ele.id==this.infoList.id)
				// 	if(items){
				// 		this
				// 	}
				// }
			})
			
			
		},
		methods:{
			bod(res){

				this.current=res;
				if(res==0){
					productArticle(1,5).then(res=>{
						console.log(res)
						this.infoList=res.data.rows
						this.dsp=true
						this.dsps=false
						
					})
				}else{
					findBrandsByPage(1,5).then(res=>{
						console.log(res)
						this.infoList=res.data.rows
						this.dsp=false
						this.dsps=true
					})
				}
				
			},
		
		
			icons(item,index){
				
				// var find=uni.getStorageSync("find")
				// console.log(find)
				// if(item.collectCount==0){
				// 	find:[]
					
				// 	uni.setStorageSync("find",item)
				// }else{
				// 	// item.collectCount=0
				// }
				if(item.collectCount==1){
					
				item.collectCount=0
				}else if(item.collectCount==0){
					item.collectCount=1
				}
				
			}
		
		
		}
		
		
	}
	
</script>

<style lang="scss" scoped>
	@import "./index.scss"
	
</style>
