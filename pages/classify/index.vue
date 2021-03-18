<template>
	<view>
		<view class="main">
			
			<view class="main-c" v-for="item in classifyList" :key="item.id" @tap="goList(item.id)">
				<view class="text">
					{{item.name}}
				</view>
				<image :src="item.icon" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	import {findAllCategory} from "@/api/classify/index.js"
	export default{
		data(){
			return{
				classifyList:[],
			}
		},
		onLoad(){
			findAllCategory().then(res=>{
				this.classifyList=res.data.items[0].children; 

			})
		},
		methods:{
			goList(res){
				getApp().globalData.goodsId = res
				uni.navigateTo({
				    url: './classifyList/index'
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "./index.scss"
</style>
