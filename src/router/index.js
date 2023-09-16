import VueRouter from 'vue-router'


import Register from '@/components/Register.vue';
import SignIn from '@/components/SignIn.vue';
import Login from '@/views/Login.vue';

const router = new VueRouter({
	routes: [
		{
			path:'/',
			redirect:'/login'
		},
		{
			path: '/login',
			component: Login,
			children: [
				{
					path: 'signin',
					component: SignIn,
				},
				{
					path: 'register', 
					component: Register,
				},
				
				
			],
		},
	]
})

export default router