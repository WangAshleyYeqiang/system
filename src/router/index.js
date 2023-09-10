import VueRouter from 'vue-router'

import Login from './../components/Login'

const router = new VueRouter({
	routes: [
		{
			path:'/login',
			component:Login
		}
	]
})

export default router