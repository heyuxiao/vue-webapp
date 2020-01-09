<template>
	<div>
		个人中心
		<TabBar></TabBar>
	</div>
</template>

<script>
	const TabBar = ()=> import('@/components/TabBar.vue')
	export default {
		components:{
			TabBar
		}
	}
</script>

<style>
</style>
