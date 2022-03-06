/* 该文件用于创建整个应用的路由器 */
import VueRouter from 'vue-router'

import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import News from '../pages/News'
import Detail from '../pages/Detail'

const router = new VueRouter({
    routes:[
        {
            path:'/about',
            component: About,
            meta:{title:'About page'}
        },
        {
            path:'/home',
            component: Home,
            meta:{title:'Home page'},
            children: [
                {
                    path:'message',
                    component: Message,
                    meta:{isAuth:true,title:'Message page'},
                    children: [
                        {
                            path:'detail',
                            component: Detail,
                            meta:{title:'About page'}
                        }
                    ]
                },
                {
                    path:'news',
                    component: News,
                    meta:{isAuth:true,title:'News page'},
                }
            ]
        }
    ]
})

router.beforeEach((to,from,next)=>{
    console.log(to,from)
    // if(to.path === '/home/news' || to.path === '/home/message'){
    if(to.meta.isAuth){
        if(localStorage.getItem('school')==='LuoWai'){
            next()
        }else{
            alert('School is not right! No authorized')
        }
    }else{
        next()
    }
})

router.afterEach((to,from)=>{
    document.title = to.meta.title || 'Start page'
})

export default router