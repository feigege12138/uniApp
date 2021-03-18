<template>
	
	<view class="main">
		
		<view class="items" v-for="(itme,index) in items" :key="index">
			<view class="ipt">
				<input type="r" value="" />
			</view>
			<view class="items-main">
				
			</view>
			<view class="btn">
				<view class="right">
					<view class="ad" @tap="cutNumber(index)">
						-
					</view>
					<view class="number">
						{{itme.quantity}}
					</view>
					<view class="ad" @tap="addNumber(index)">
						+
					</view>
				</view>
			</view>
		</view>
		
	</view>
	
</template>

<script>
	import {findAllCartItem} from'../../../api/cart/index.js'
	export default{
		data(){
			return{
				items:[],
				number:1
			}
		},
		onLoad() {
			findAllCartItem().then(res=>{
				console.log(res)
				this.items=res.data.items
				
				
			})
		},
		methods:{
			cutNumber(res){
				this.items[res].quantity--
			},
			addNumber(res){
				this.items[res].quantity--
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "./index.scss"
</style>
