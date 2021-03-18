<template>
  <view>
    <view class="info">
      <view class="left">

        <image :src="userInfo.icon" mode="" @tap="goUsetInfo()"></image>
      </view>
      <view class="right">
        <view class="name">
          {{userInfo.nickname}}
        </view>
        <view class="usId">
          用户ID:{{userInfo.username}}
        </view>
      </view>
    </view>

    <!-- 我的订单 -->
    <view class="order">
      <view class="order-c">
        <view class="title">
          我的订单
        </view>
        <view class="orderNav">
          <view class="items" v-for="(item,index) in orderList" :key="index" @tap="goListInfo(index)">
            <view class="image">

              <image :src="item.img" mode=""></image>
            </view>
            <view class="name">
              {{item.name}}
            </view>
          </view>
        </view>
      </view>
    </view>


    <view class="serve">
      <view class="serveItem" v-for="(item,index) in serveList" :key="index" @tap="cartList(index)">

        <view class="img">
          <uni-icons :type="item.img" size="30"></uni-icons>
        </view>
        <view class="name">
          {{item.name}}
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import {
    getMemberInfo
  } from '../../api/login/index.js'
  import {
    mix
  } from '../../mixins/index.js'
  export default {
    // mixins:[mix],

    data() {
      return {
        userInfo: {},
        orderList: [{
            name: "待付款",
            img: "../../static/icons/icon-pay.png"
          },
          {
            name: "已付款",
            img: "../../static/icons/pay-done.png"
          },
          {
            name: "代发货",
            img: "../../static/icons/icon-car.png"
          },
          {
            name: "已收货",
            img: "../../static/icons/icon-done.png"
          },
          {
            name: "售后",
            img: "../../static/icons/icon-back.png"
          },
        ],
        serveList: [{
            name: "商品收藏",
            img: "heart"
          },
          {
            name: "品牌",
            img: "star"
          },
          {
            name: "文章收藏",
            img: "compose"
          },
          {
            name: "地址",
            img: "location"
          },
          {
            name: "卡包",
            img: "map"
          },
          {
            name: "购物车",
            img: "cart"
          },
          {
            name: "联系客服",
            img: "paperclip"
          },
        ]
      };
    },
    // 
    onShow() {

      if (uni.getStorageSync("token")) {


        getMemberInfo().then(res => {
          console.log(res)
          this.userInfo = res.data.userInfo
          console.log(this.userInfo)


        })
      } else {
        uni.showModal({
          title: '暂未登陆',
          content: '是否前往登陆',
          success: function (res) {
            if (res.confirm) {

              uni.navigateTo({
                url: '/pages/my/login/index'
              });
            } else if (res.cancel) {

            }
          }
        });
      }
    },
    onLoad() {


    },
    methods: {

      goListInfo(res) {
        uni.navigateTo({
          url: '../order/index'
        });
        if (res == 4) {

          uni.setStorageSync("orderList", 9)
        } else {
          uni.setStorageSync("orderList", res)
        }
      },

      goUsetInfo() {
        console.log(123)
        uni.setStorageSync("userInfo", this.userInfo)
        uni.navigateTo({
          url: '/pages/my/userInfo/index'
        });

      },

      cartList(res) {
        if (res == 5) {

          uni.navigateTo({
            url: "/pages/my/cart/index"
          })
        }

      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "./index.scss"
</style>