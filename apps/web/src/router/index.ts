import { createRouter, createWebHistory } from 'vue-router'

import AdminLayout from '@/layouts/AdminLayout.vue'
import { useUserStore } from '@/stores/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue'),
      meta: { title: '登录', public: true },
    },
    {
      path: '/',
      component: AdminLayout,
      redirect: '/dashboard',
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: () => import('@/views/dashboard/index.vue'),
          meta: { title: '首页' },
        },
        {
          path: 'system/users',
          name: 'system-users',
          component: () => import('@/views/system/users/index.vue'),
          meta: { title: '用户管理' },
        },
        {
          path: 'system/roles',
          name: 'system-roles',
          component: () => import('@/views/system/roles/index.vue'),
          meta: { title: '角色管理' },
        },
        {
          path: 'learning/courses',
          name: 'learning-courses',
          component: () => import('@/views/learning/courses/index.vue'),
          meta: { title: '课程目录' },
        },
        {
          path: 'learning/stages',
          name: 'learning-stages',
          component: () => import('@/views/learning/stages/index.vue'),
          meta: { title: '学习阶段' },
        },
        {
          path: 'learning/tasks',
          name: 'learning-tasks',
          component: () => import('@/views/learning/tasks/index.vue'),
          meta: { title: '学习任务' },
        },
        {
          path: 'documents',
          name: 'documents',
          component: () => import('@/views/documents/index.vue'),
          meta: { title: '文档管理' },
        },
        {
          path: 'ai',
          name: 'ai',
          component: () => import('@/views/ai/index.vue'),
          meta: { title: 'AI 学习教练' },
        },
      ],
    },
  ],
})

router.beforeEach((to) => {
  const userStore = useUserStore()

  if (to.meta.public) {
    if (to.path === '/login' && userStore.isLoggedIn) {
      return '/dashboard'
    }
    return true
  }

  if (!userStore.isLoggedIn) {
    return '/login'
  }

  return true
})

export default router
