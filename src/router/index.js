import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const presetRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    meta: { title: '登录' },
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/',
    component: () => import('@/views/login/index'),
    meta: { title: '登录' },
    hidden: true
  },
  {
    path: '/Home',
    component: () => import('@/components/Home'),
    meta: { title: 'HOME页面' },
    children: [
      {
        path: '/dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '系统首页' }
      },
      {
        path: '/table',
        component: () => import('@/views/table/index'),
        meta: { title: '基础表格' }
      },
      {
        path: '/tabs',
        component: () => import('@/views/tabs/index'),
        meta: { title: 'tabs标签页' }
      },
      {
        path: '/form',
        component: () => import('@/views/form/index'),
        meta: { title: '基本表单' },
      },  
      {
        path: '/thirdForm1',
        component: () => import('@/views/thirdForm1/index'),
        meta: { title: '富文本编辑器' }
      },
      {
        path: '/thirdForm2',
        component: () => import('@/views/thirdForm2/index'),
        meta: { title: 'markdown编辑器' }
      },        
      {
        path: '/upload',
        component: () => import('@/views/upload/index'),
        meta: { title: '文件上传' }
      }      
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  mode: "history",
  scrollBehavior: () => ({ y: 0 }),
  routes: presetRoutes
})

const router = createRouter()

export function resetRouter() {
  const addRouter = createRouter()
  router.matcher = addRouter.matcher // reset router
}

export default router;
