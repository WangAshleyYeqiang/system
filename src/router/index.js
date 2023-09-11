import VueRouter from 'vue-router'

import Login from './../pages/Login'

const router = new VueRouter({
	routes: [
		{
			path:'/login',
			component:Login
		}
	]
})

export default router