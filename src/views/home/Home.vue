<template>
	<div class="home">
		
		<MySwipe></MySwipe>
		<div v-text="msg"></div>
		
		<TabBar></TabBar>
	</div>
</template>

<script>
	const TabBar = ()=> import('@/components/TabBar.vue')
	const MySwipe = ()=>import('@/components/MySwipe.vue')
	import { fetchMusic} from '@/utils/api'
	import { mapState } from 'vuex'
	export default {
		components:{
			MySwipe,
			TabBar
		},
		computed:{
			...mapState('homeStore',['msg'])
		},
		mounted() {
			fetchMusic().then(res=> {
				console.log(res)
			})
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
