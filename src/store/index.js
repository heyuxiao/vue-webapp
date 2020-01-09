import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import homeStore from './modules/home.js'

const store = new Vuex.Store({
	modules:{
		homeStore
	}
})

export default store
