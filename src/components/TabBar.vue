<template>
	<div class="tabbar">
		<router-link to='/' tag="span" exact-active-class="on">首页</router-link>
		<router-link to='/find' tag="span" exact-active-class="on">发现</router-link>
		<router-link to='/user' tag="span" exact-active-class="on">个人中心</router-link>
	</div>
</template>

<script>
</script>

<style lang="scss" scoped>
	.tabbar{
		height: 1.2rem;
		background: #eee;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		line-height: 1.2rem;
		font-size: 0.43rem;
		&>span{
			flex: 1;
		}
		&>span.on{
			color: red;
		}
	}
</style>
