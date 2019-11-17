<template>
	<div class="container1 bl-row">
		<div class="bl-col-8" >
	    <div class="card">
			<div class="card-header bl-row">
				<div class="card-header-left">
					<img :src="this.user.avatar" class="head-portrait1">
				</div>
				<div class="card-header-right">
					<p class="bl-title">{{this.user.nickname}}</p>
					<ul>
					<li>
						<router-link to="/message/from">
						<p>{{this.user.follows}}</p>
						<p class="bl-meta">关注></p>
						</router-link>
					</li>
					<li>
						<router-link to="/message/from">
						<p>{{this.user.fans}}</p>
						<p class="bl-meta">粉丝></p>
						</router-link>
					</li>
					<li>
						<router-link to="/message/from">
						<p>{{this.user.articles}}</p>
						<p class="bl-meta">文章></p>
						</router-link>
					</li>
					<li>
						<router-link to="/message/from">
						<p>0</p>
						<p class="bl-meta">收藏喜欢></p>
						</router-link>
					</li>
				</ul>
				</div>
			</div>
			<div class="card-body">
				
			</div>
		</div>
		</div>
		<div class="bl-col-4 left" >
			<hr class="line"/>
				<ul>
					<li>
						<router-link to="/message/from"><img src="../assets/image/应用.png" class="icon-1"> 我关注的专题/文集/连载</router-link>
					</li>
					<li>
						<router-link to="/message/to"><img src="../assets/image/关注.png" class="icon-1"> 我喜欢的文章</router-link>
					</li>
				</ul>
			<hr class="line1" />
			<p class="font1 ">我创建的专题</p>
			<p class="font2 bl-btn"><img src="../assets/image/新建.png" class="avatar1">创建一个新专题</p>
			<hr class="line1" />
		</div>
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
	}
</script>

<style >
	.container1{
		width: 60%;
	}
	.head-portrait1{
		border-radius: 50%;
		width: 80px;
		height: 80px;
	}
	.icon-1{
		width: 15px;
		height: 15px;
		margin-right: 10px;
	}
	.avatar1{
		width: 10px;
		height: 10px;
		margin-right: 5px;
	}
	.left ul{
		display: flex;
		flex-direction: column;
	}
	.left li{
		margin-bottom: 10px;
	}
	.line{
		margin: 70px 0px 20px 0px;
	}
	.line1{
		margin: 20px 0px 20px 0px;
	}
	.font1{
		color: #EEEEEE;
	}
	.font2{
		color: rgb(26, 250, 41);
		font-size: 10px;
	}
	.left p{
		margin-bottom: 10px;
	}
	.card{
		margin-top: 70px;
	}
	.card-header-left{
		flex: 0 0 17%;
	}
	.card-header-right li{
		border-right: 1px solid #EEEEEE;
		padding-right: 10px;
		padding-left: 10px;
	}
</style>
