var obj = {
	methods:{
		checkLogins(){
			var token = uni.getStorageSync("token");
			if(token){
				// 发送ajax
				return true
			}else{
				uni.showModal({
					title:"登录提示",
					content:"暂未登录,是否跳转到登录界面",
					success(res){
						if (res.confirm) {
							uni.navigateTo({
								url:"/pages/mine/login/login"
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
						
					}
				})
				return false
			}
		}
	}
}

export default obj