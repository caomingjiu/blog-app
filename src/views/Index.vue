<template>

	
		<div class="al-container bl-row">
		<div class="al-left al-top" >
			<div class="bl-col "  v-for="(article,index) in articles" :key="index">
				<div class="al-card bl-row" >
					<div class="al-left" >
						<a href="*" class="al-font-title">{{article.title}}</a>
						<p class="bl-meta">{{article.summary}}</p>
						<div class="bl-row al-bottom">
							<p class="bl-meta al-bottom1">{{article.nickname}}</p>
							<div class="bl-row al-bottom1">
								<img src="../assets/image/评论.png" class="icon">
								<p class="bl-meta">{{article.comments}}</p>
							</div>
							<div class="bl-row al-bottom1">
								<img src="../assets/image/关注1.png" class="icon">
								<p class="bl-meta">{{article.likes}}</p>
							</div>
						</div>
					</div>
					<div class="al-right al-col" >
						<img :src="'http://images.weserv.nl/?url='+article.thumbnail" class="al-avatar">
					</div>
				</div>
			</div>
		</div>
		<div class="al-right">
			<div class="card-top">
				<img src="../assets/image/1.png" class="avatar">
				<img src="../assets/image/2.png" class="avatar">
				<img src="../assets/image/3.png" class="avatar">
				<img src="../assets/image/4.png" class="avatar">
			</div>
			<div class="bottom">
				<div class="bottom-title">
					<p>推荐作者</p>
					<div class="bl-row bl-btn" @click="exchange">
						<img src="../assets/image/换一批.png" class="icon ">
						<p>换一批</p>
					</div>
				</div>
				<div class="bottom-body" v-for="(user,index) in users.slice(begin,end)" :key="index">
					<div class=" bl-row box1">
						<div class="box-left">
							<img :src="user.avatar" class="head-portrait">
						</div>
						<div class="box-right">
							<div>
								<p class="bl-sub-title">{{user.nickname}}</p>
								<p class="bl-meta">{{user.introduction.substring(0,10)+"..."}}</p>
							</div>
							<div>
								<img src="../assets/image/新建.png" class="icon">
								<span class="bl-btn font">关注</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		</div>
		
</template>

<script>
	export default {
		data() {
			return {
			users : [],
			articles:[],
			begin:0,
			end:5
			}
			
		},
		
		created: function() {
				this.axios.get('http://localhost:8080/users').then(response => {
					this.users = response.data.data;
					// console.log(response.data.data);
				})
				this.axios.get('http://localhost:8080/articles/hot').then(res =>{
					this.articles=res.data.data;
				})
		},
		methods:{
			exchange(){
				if(this.end<this.users.length){
					this.begin+=5
					this.end+=5
				}else{
					this.begin=0
					this.end=5
				}
				
			}
		}
	}
</script>

<style >
	h2 {
		margin: 0;
	}
	.al-container{
		width: 60%;
		margin: 0 auto;
	}
	.al-left{
		flex: 1 1 75%;
	}
	.al-right{
		flex: 1 1 25%;
	}
	.al-card{
		margin-bottom: 30px;
		padding-bottom: 20px;
		padding-right: 10px;
		border-bottom: 1px solid #EEEEEE;
	}
	.al-top{
		margin-top: 20px;
	}
	.al-avatar{
		width: 148px;
		height: 100px;
	}
	.al-font-title{
		font-size: 15px;
		font-weight: 700;
		color: #333;
	}
	.al-bottom{
		justify-content: flex-end;
	}
	.al-bottom1{
	    margin-right:5px;
	}
	.avatar{
		border-radius: 5px;
		width: 270px;
		height: 50px;
	}
	.font{
		color:  rgb(26, 250, 41);
	}
	.bottom-title{
		display: flex;
		justify-content: space-between;
	}
	.bottom-title p{
		color: #E0E0E0;
		font-size: 14px;
	}
	.bottom{
		padding-right: 10px;
	}
	.icon{
		width: 10px;
		height:10px;
		margin-top: 5px;
	}
	.box1{
		margin-top: 5px;
	}
    .box-left{
		flex: 1 1 20%;
	}
	.box-right{
		flex: 1 1 80%;
		display: flex;
		justify-content: space-between;
	}
	.head-portrait{
		border-radius: 50%;
		width: 40px;
		height: 40px;
	}
</style>
