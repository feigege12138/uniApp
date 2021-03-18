<template>
	
	<view class="">
		
	</view>
</template>

<script>
	import{findAllOrders}from'../../api/order/index.js'
	export default{
		data(){
			return{
				orderList:[],
				navList:[
					{
						name:"待付款",
						num:0
					},
					{
						name:"已付款",
						num:1
					},
					{
						name:"代发货",
						num:2
					},
					{
						name:"已发货",
						num:3
					},
					{
						name:"申请退款",
						num:9
					},
				]
			}
		},
		onLoad() {
			findAllOrders().then(res=>{
				console.log(res)
				this.orderList=res.data.orderList
				console.log(this.orderList)
			console.log(	this.orderList.filter(el=>el.order.status==9))
			
			})
			
		}
	}
</script>

<style lang="scss" scoped>
	@import "./index.scss"
</style>
