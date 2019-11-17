import Vue from 'vue'
import VueRouter from 'vue-router'
//引入所有出现在路由中的页面组件！！
import Nav from '@/views/Nav.vue'
import Login from '@/views/Login.vue'
import Index from '@/views/Index.vue'
import Message from '@/views/Message.vue'
import Profile from '@/views/Profile.vue'
import Frommessage from '@/views/Frommessage.vue'
import Tomessage from '@/views/Tomessage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Nav,
	children :[
		{
			path : '/',
			redirect : 'index'
		},
		{
			path : 'index',
			component : Index
		},
		{
			path : 'message',
			component : Message,
			children :[
				{
					path : '/',
					redirect : 'from'
				},
				{
					path : 'from',
					component : Frommessage
				},
				{
					path : 'to',
					component : Tomessage
				}
			]
		},
		{
			path : 'profile',
			component : Profile
		}
	]
  },
  {
    path: '/login',
    component : Login
  }
]

const router = new VueRouter({
  routes
})

export default router
