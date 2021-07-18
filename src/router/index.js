import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Sop from '@/components/Sop'
import Rute from '@/components/Rute'
import Register from '@/components/Register'
import Kodebooking from '@/components/Kodebooking'
import Registerpendaki from '@/components/Registerpendaki'
import Newsdetail from '@/components/Newsdetail'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/sop',
            name: 'Sop',
            component: Sop
        },
        {
            path: '/rute',
            name: 'Rute',
            component: Rute
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/kodebooking',
            name: 'Kodebooking',
            component: Kodebooking
        },
        {
            path: '/registerpendaki',
            name: 'Registerpendaki',
            component: Registerpendaki
        },
        {
            path: '/newsdetail',
            name: 'Newsdetail',
            component: Newsdetail
        }
    ]
})