<template>
	
	<view >
		<view class="main">
			
			
			
			<view class="centent" v-if="show">
				<view class="alterInfo">
					<view class="alterInfo-c" @tap="alterInfo()">
						修改用户信息
					</view>
					
				</view>
				
				<view class="g">
					<view class="left">
						头像
					</view>
					<view class="right">
						<image :src="userInfo.icon" mode=""></image>
					</view>
				</view>
				<view class="a">
					<view class="left">
						用户名
					</view>
					<view class="right">
						{{userInfo.username}}
					</view>
				</view>
				<view class="a">
					<view class="left">
						昵称
					</view>
					<view class="right">
						{{userInfo.nickname}}
					</view>
				</view>
				<view class="a">
					<view class="left">
						手机号
					</view>
					<view class="right">
						{{userInfo.phone}}
					</view>
				</view>
				<view class="removeToken" @tap="removeToken()">
					退出登陆
				</view>
			</view>
			

			<!-- 修改用户页面 -->
			<view class="ament" v-else>
				<view class="alterInfo">
					<view class="alterInfo-c">
						修改用户信息
					</view>
					
				</view>
				
				<view class="g">
					<view class="left">
						头像
					</view>
					<view class="right" @tap="chooseImages()" >
						上传头像
					</view>
				</view>
				<view class="a">
					<view class="left">
						用户名
					</view>
					
					
					<view class="right">
						<input type="text" v-model="userInfo.username" />
						<!-- {{userInfo.username}} -->
					</view>
				</view>
				<view class="a">
					<view class="left">
						昵称
					</view>
					<view class="right">
						<input type="text" v-model="userInfo.nickname" />
					</view>
				</view>
				<view class="a">
					<view class="left">
						手机号
					</view>
					<view class="right">
						<input type="text" v-model="userInfo.phone" />
					</view>
				</view>
				<view class="removeToken" @tap="renew()">
					更新
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import{request} from"../../../api/request.js"
	export default{
		
		data(){
			return{
				userInfo:{},
				show:true,
				tempFilePaths:''
				
			}
		},
		
		onLoad(){
			
		this.userInfo=uni.getStorageSync("userInfo")
		console.log(this.userInfo)
		},
		
		methods:{
			chooseImages(){
				
				
				
				
			},
			
			removeToken(){
				uni.removeStorageSync("token")
				uni.navigateTo({
					url: "/pages/my/login/index"
				})
			},
			
			alterInfo(){
				this.show=!this.show
			},
			renew(){
				this.show=!this.show
			}
			
		}
		
		
		
	}
	
	
</script>

<style lang="scss" scoped>
	
	@import './index.scss'
	
</style>
