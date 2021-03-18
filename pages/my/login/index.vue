<template>
	<view>
		<view class="main">
			<view class="head">
				<image src="http://jinglins.gitee.io/leju/static/img/leju-logo.a1c25311.png" mode=""></image>
			</view>
			
			<view class="ipt">
				<view class="text">
					
				<input type="text" v-model="text" />
				</view>
				<view class="text">
					
				<input type="password" v-model="password" />
				</view>
			</view>
			
			
			<view class="btn" @tap="login()">
				登陆
			</view>
		</view>
		
	</view>
</template>

<script>
	import{doLogin} from"../../../api/login/index.js"
	export default{
		data(){
			return{
				text:"17596496508",
				password:"123456"
			}
		},
		onLoad(){
			
		},
		methods:{
			login(){
					
					doLogin({
					password:this.password,
					username:this.text
				}).then(res=>{
					console.log(res)
					if(res.success){
						uni.setStorageSync("token",res.data.token)
						uni.switchTab({
							url: '/pages/my/index'
						});
					}else{
						uni.showModal({
							title: res.message,
							success: function(res) {
								if (res.confirm) {
						
									
								} else if (res.cancel) {
						
								}
							}
						});
					}
					
				
				
				
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "./index.scss"
</style>
