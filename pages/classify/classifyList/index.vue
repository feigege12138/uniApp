<template>
	<view>
		<view class="nav">
			<view class="nav-c">	
				<view class="nav-item" v-for="(item,index) in navList" :key="index" :class="{org:index == current}" @tap="goitem(item.id,index)" >
					{{item.name}}
					
					<view class="icons" v-if="index==1||index==2">
						<uni-icons type="arrowup" size="10" :color="item.selectedIconStatus == 'up' ? 'rgb(221, 82, 77)' : '#fff'"></uni-icons>
						<uni-icons type="arrowdown" size="10"  :color="item.selectedIconStatus == 'down' ? 'rgb(221, 82, 77)' : '#fff'"></uni-icons>
					</view>
				</view>
			</view>
		</view>
		
		
		<view class="like">
			<view class="like_list">
				<view class="item" v-for="(item,index) in goodsList" :key="index" @tap="goGoodInfo(item.id)">
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
	
</template>

<script>
	import {findProductList} from "../../../api/classify/classifyList/index.js"
	export default{
		
		data(){
			return{
				navList:[
					{
						name:"新品"
					},
					{
						name:"销量",
						selectedIconStatus:"nul"
					},
					{
						name:"价格",
						selectedIconStatus:"nul"
					},
					{
						name:"筛选"
					},
				],
				current:0,
				sortBy:'',
				id:"",
				isDesc:1,
				start:1,
				limit:5,
				total:0,
				goodsList:[]
				
				
			}
		},
		onLoad(options){
			this.id=getApp().globalData.goodsId
			this.init()
			
			
		},
		onReachBottom(){  //上拉触底函数
		        if(!this.isLoadMore){  //此处判断，上锁，防止重复请求
		              this.start++
		              this.init()
		        }
		  }, 
		 onPullDownRefresh() {
		        //监听下拉刷新动作的执行方法，每次手动下拉刷新都会执行一次
		       this.start=1;
			   this.limit=5;
			   this.init()
		        setTimeout(function () {
		            uni.stopPullDownRefresh();  //停止下拉刷新动画
		        }, 1000);
		    },

		methods:{
			goGoodInfo(res){
				
				getApp().globalData.goodsInfoId = res
				uni.navigateTo({
				    url: '/pages/home/goodsInfo/index?id='+res
				});
			},
			goitem(id,res){
				this.goodsList=[]
				if(this.current==res){
					
				}else{
					this.navList.forEach(ele =>ele.selectedIconStatus = "nul");
					if(this.navList[res].name=="销量"){
						this.sortBy="sale"
						
					}else if(this.navList[res].name=="价格"){
						this.sortBy="price"
					}else{
						this.sortBy=''
					}
				}
					if(res==1||res==2){
						if(this.navList[res].selectedIconStatus=="nul"){
							this.navList[res].selectedIconStatus="up"
							this.isDesc=1
						}else if(this.navList[res].selectedIconStatus=="up"){
							this.navList[res].selectedIconStatus="down"
							this.isDesc=0
						}else if(this.navList[res].selectedIconStatus=="down"){
							this.navList[res].selectedIconStatus="up"
							this.isDesc=1
						}
					}
						this.current=res	
						this.init()
				},
				
			init(){
				findProductList(this.start,this.limit,{
					"categoryId":this.id,
					"isDesc":this.isDesc,
					"sortBy":this.sortBy,
				}).then(res=>{
					if(res.data.rows.length==0){
						
					}else{
						
					this.goodsList.push(...res.data.rows);
					}
				})
			}	
		}
	}
	
</script>
	
<style lang="scss" scoped>
	@import  "./index.scss"
</style>
