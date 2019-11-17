<template>
	<div>
		<ul>
			
			<li>
				<router-link to="/message/from">已读消息</router-link>
			</li>
			<li>
				<router-link to="/message/to">未读消息</router-link>
			</li>
		</ul>
		<router-view class="box"/>
	</div>
</template>

<script>
</script>

<style>
	ul{
		display: flex;
		list-style: none;
		width: 100%;
		justify-content: space-around;
	}
	.box{
		width: 70%;
		margin: 0 auto;
		background-color: #fff;
		min-height: 400px;
	}
</style>
