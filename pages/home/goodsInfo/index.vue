<template>

	<view>
		<view v-if="showw">

			<view class="store" @tap="icons()">
				<uni-icons :type="isicon?'star-filled':'star'" size="60"></uni-icons>
			</view>
			<view class="banner">

				<swiper class="swiper" indicator-dots=true>
					<swiper-item v-for="item in bannerList" :key="item.id">
						<view class="swiper-item uni-bg-red">
							<image :src="item.pic"></image>
						</view>
					</swiper-item>

				</swiper>
			</view>

			<view class="top">
				<view class="price">
					<view class="left">
						{{goodsinfo.promotionPrice}}
					</view>
					<view class="str">
						.00
					</view>
					<view class="center">
						￥{{goodsinfo.price}}
					</view>
					<view class="right">
						<view class="no">

							没有促销使用原价
						</view>
					</view>

				</view>

				<view class="name">
					{{goodsinfo.name}}
				</view>
				<view class="text">
					{{goodsinfo.description}}
				</view>
			</view>

			<view class="bottom">
			</view>
			<mp-html :tag-style="style" :content=" goodsinfo.detailMobileHtml">

			</mp-html>

		</view>


		<view class="tabs">
			<uni-icons class="t" type="headphones" size="30"></uni-icons>
			<view class="right">
				<view class="car" @tap="cartOrPuy(1)">
					加入购物车
				</view>
				<view class="buy" @tap="cartOrPuy(0)">
					立即购买
				</view>
			</view>
		</view>


		<view class="displays" v-if="carshow">
			<view class="displays-c">
				<view class="x" @tap="remove()">

				</view>
				<view class="top">
					<image :src="carif.pic" mode=""></image>
					<view class="aaa">
						<view class="name">
							单人沙发
						</view>
						<view class="number">
							库存数量
						</view>
					</view>
				</view>


				<view class="center">
					<view class="title">
						商品选择
					</view>
					<view class="n" v-for="(item,index) in bannerList" :class="{border:index == num}" @tap="numm(index)">
						<view class="n1" v-for="(items) in spData">
							{{items.key}}
							{{items.value}}
						</view>
					</view>


					<view class="title topp">
						特色服务
					</view>
					<view class="n">

						送货上门

					</view>
					<view class="n ">

						上门安装

					</view>
				</view>


				<view class="puyNum">
					<view class="left">
						购买数量
					</view>
					<view class="right">
						<view class="ad" @tap="cutPuyNumber()">
							-
						</view>
						<view class="number">
							{{puyNumbers}}
						</view>
						<view class="ad" @tap="addPuyNumber()">
							+
						</view>
					</view>
				</view>

				<view class="btn">
					<view class="btn-c" @tap="fix()">
						确定
					</view>
				</view>

			</view>
		</view>

	</view>
</template>

<script>
	import {
		productDetail
	} from '../../../api/classify/classifyList/index.js'
	import {
		addCart
	} from '../../../api/cart/index.js'
	export default {

		data() {
			return {
				goodsinfo: '',
				bannerList: '',
				style: {
					img: "width:100%; height:auto; margin:0 auto;",
					div: "width:100%; font-size:30rpx"
				},
				isicon: true,
				info: {},
				showw: true,
				carshow: false,
				carif: '',
				spData: '',
				num: -1,
				puyNumber: 0,
				puyNumbers: 0



			}
		},

		onLoad(options) {

			productDetail(options.id).then(res => {
				this.goodsinfo = res.data.product
				this.bannerList = this.goodsinfo.skuList
				this.carif = this.bannerList[0]
				this.spData = JSON.parse(this.carif.spData)


				var goods = uni.getStorageSync("goods");
				if (goods.length == 0) {
					this.isicon = false
				} else {
					var item = goods.find(ele => ele.id == res.data.product.id);
					if (item) {
						this.isicon = true
					} else {
						this.isicon = false
					}
				}
				uni.setNavigationBarTitle({
					title: res.data.product.name
				})
			})



		},

		methods: {
			icons() {
				var goods = uni.getStorageSync("goods");

				if (goods == undefined || goods == "") {
					goods = [];
				}
				if (this.isicon == true) {
					var item = goods.find(ele => ele.id == this.goodsinfo.id);
					var index = goods.find(ele => ele.id == this.goodsinfo.id)
					if (item) {
						goods.splice(index, 1)
					} else {
						goods.push(this.goodsinfo, index)

					}
				} else {
					goods.push(this.goodsinfo)
				}

				this.isicon = !this.isicon;
				uni.setStorageSync("goods", goods)
			},

			remove() {
				this.showw = !this.showw
				this.carshow = !this.carshow
				this.puyNumbers = 0
			},
			numm(res) {

				this.num = res
			},
			// 添加购物车or立即购买
			addPuyNumber() {
				this.puyNumbers++
			},
			cutPuyNumber() {
				this.puyNumbers--
				if (this.puyNumbers < 0) {
					this.remove()
				}
			},
			cartOrPuy(res) {
				// if(uni.getStorageSync("token")==""||uni.getStorageSync("token"==undefined)){

				// 	uni.navigateTo({
				// 	    url: '/pages/my/login/index'
				// 	});
				// 	console.log(uni.getStorageSync("token"))
				// }else{

				// 	if(res==1){
				// 		this.puyNumber=res

				// 	}else if(res==0){
				// 		this.puyNumber=res
				// 	}
				// }	

				if (uni.getStorageSync("token")) {
					if (res == 1) {
						this.puyNumber = res
						this.showw = !this.showw
						this.carshow = !this.carshow
					} else if (res == 0) {
						this.puyNumber = res
					}
					console.log(0)
				} else {
					uni.showModal({
						title: '暂未登陆',
						content: '是否前往登陆',
						success: function(res) {
							if (res.confirm) {

								uni.navigateTo({
									url: '/pages/my/login/index'
								});
							} else if (res.cancel) {

							}
						}
					});
					// console.log(1)

				}


			},

			// 确定
			fix() {


				if (this.puyNumbers == 0) {

					uni.showToast({
						title: '数量不得为0',
						duration: 2000
					});


					console.log("数量为0")
				} else {
					if (this.puyNumber == 1) {

						addCart({
							"productId": this.carif.productId,
							"productSkuId": this.carif.id,
							"quantity": this.puyNumbers
						}).then(res => {})
						uni.showToast({
							title: '添加购物车成功',
							duration: 2000
						});
						this.remove()

					} else {
						uni.showToast({
							title: '购买成功',
							duration: 2000,
						});
						this.remove()

					}
				}



			}


		}



	}
</script>

<style lang="scss" scoped>
	@import "./index.scss"
</style>
