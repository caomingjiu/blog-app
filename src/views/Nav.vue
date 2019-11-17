<template>
	<div >
		<div class="header">
			<div class="left">
				<router-link to="/">
					<img src="../assets/image/简书.png" class="logo">
				</router-link>
				<router-link to="/" >
					<div class="bl-row">
					<img src="../assets/image/发现.png" class="icon">
					<p class="font">发现</p>
					</div>
					</router-link>
				<router-link to="/profile">
					<div class="bl-row">
					<img src="../assets/image/书.png" class="icon">
					<p class="font">关注</p>
					</div>
					</router-link>
				<router-link to="/message">
					<div class="bl-row">
					<img src="../assets/image/消息.png" class="icon">
					<p class="font">消息</p>
					</div>
				</router-link>
				<input type="text" class="search">
				<button><img src="../assets/image/搜索.png" class="icon icon-location"></button>
			</div>
			<div class="right">
				<ul>
					<li>
					<router-link to="/login" v-if="!this.user"><p class="font">登录</p></router-link>
					</li>
					<li>
					<router-link to="/login" v-if="!this.user"><p class="font">注册</p></router-link>
					</li>
					<li>
					<router-link to="/profile" v-if="this.user">
					<img :src="this.user.avatar" class="avatar">
				    </router-link>
					</li>
					<li @click="logout">
						<router-link to="/" v-if="this.user">
							<p  class="font">退出</p>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
		<router-view class="bl-container"/>
	</div>
		
	
	
</template>

<script>
	export default {
		data() {
			return {	
			user: JSON.parse(localStorage.getItem('user'))
			}
		},
		
		created: function() {},
		methods:{
			logout(){
				this.user=null
				localStorage.clear();
			}
		}
	}
</script>

<style scoped>
	.avatar{
		border-radius: 50%;
		width: 40px;
		height: 40px;
	}
	.logo{
		width: 100px;
		height: 50px;
		margin-right: 130px;
		margin-left: 50px;
	}
	.left{
		display: flex;
		align-items: center;
	}
	.right{
		display: flex;
		align-items: center;
	}
	.right ul li{
		display: flex;
	    align-items: center;
	}
	.font{
		font-size:17px;
		color: rgb(55, 55, 55);
		margin-right: 30px;
	}
	.icon{
		width: 25px;
		height:25px;
		margin-right: 10px;
		margin-top: -1px;
	}
    .header{
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #EEEEEE;
	}
	.search{
		background-color: rgb(238, 238, 238);
		border-radius: 20px;
		height: 30px;
	}
	.icon-location{
		position: relative;
	    left: -30px;
	}
</style>
