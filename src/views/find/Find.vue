<template>
	<div>
		发现
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
