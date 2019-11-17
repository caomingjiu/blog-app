<template>
	<div class="bl-df-center">
		<div class="login-box bl-shadow">
			<div>
				<input type="text" placeholder="输入手机号" class="bl-input-box" v-model="userDto.mobile" />
				<input type="password" placeholder="输入密码" class="bl-input-box" v-model="userDto.password" />
			</div>
			<div>
				<button class="bl—btn bl-btn-round bl-btn-default bl-btn-nomal bl-shadow " @click="signIn(userDto)">确定</button>
				<button class="bl—btn bl-btn-round bl-btn-warning bl-btn-nomal bl-shadow">取消</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	  data() {
	    return {
	      userDto: {
	        mobile: '',
	        password: ''
	      }
	    };
	  },
	  methods: {
	    signIn(userDto) {
	      this.axios.post('http://localhost:8080/sign-in', JSON.stringify(this.userDto)).then(response => {
	        alert(response.data.msg);
	        if (response.data.msg === '登陆成功') {
	          //将后台的用户信息存入本地存储
	          localStorage.setItem('user',JSON.stringify(response.data.data))
			  //路由跳转
	          this.$router.push('/profile');
	        }
	      });
	    }
	  }
	};
</script>

<style>
	
</style>
