import VueRouter from 'vue-router'


import Register from '@/components/Register.vue';
import SignIn from '@/components/SignIn.vue';
import Login from '@/views/Login.vue';
import Home from '@/views/Home.vue';
import Hall from '@/components/Hall.vue';
import My from '@/components/My.vue';


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
		{
			path:'/home',
			component:Home,
			children: [
				{
					path: 'hall',
					component: Hall,
				},
				{
					path: 'my', 
					component: My,
				},
				
				
			],
		}
	]
})

export default router