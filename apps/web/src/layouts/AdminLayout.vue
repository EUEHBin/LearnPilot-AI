<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {
  Collection,
  Document,
  HomeFilled,
  MagicStick,
  Reading,
  Setting,
  User,
} from '@element-plus/icons-vue'

import { getAppTitle } from '@/utils'
import { useUserStore } from '@/stores/user'

const route = useRoute()
const router = useRouter()
const userStore = useUserStore()

const activeMenu = computed(() => route.path)

const menuItems = [
  { path: '/dashboard', title: '首页', icon: HomeFilled },
  { path: '/system/users', title: '用户管理', icon: User },
  { path: '/system/roles', title: '角色管理', icon: Setting },
  { path: '/learning/courses', title: '课程目录', icon: Reading },
  { path: '/learning/stages', title: '学习阶段', icon: Collection },
  { path: '/learning/tasks', title: '学习任务', icon: Collection },
  { path: '/documents', title: '文档管理', icon: Document },
  { path: '/ai', title: 'AI 学习教练', icon: MagicStick },
]

function handleLogout() {
  userStore.logout()
  router.push('/login')
}
</script>

<template>
  <el-container class="admin-layout">
    <el-aside width="220px" class="admin-layout__aside">
      <div class="admin-layout__logo">{{ getAppTitle() }}</div>
      <el-menu :default-active="activeMenu" router>
        <el-menu-item v-for="item in menuItems" :key="item.path" :index="item.path">
          <el-icon><component :is="item.icon" /></el-icon>
          <span>{{ item.title }}</span>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header class="admin-layout__header">
        <div class="admin-layout__title">{{ route.meta.title }}</div>
        <el-button type="primary" link @click="handleLogout">退出登录</el-button>
      </el-header>
      <el-main class="admin-layout__main">
        <RouterView />
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.admin-layout {
  min-height: 100vh;
}

.admin-layout__aside {
  border-right: 1px solid var(--el-border-color-light);
}

.admin-layout__logo {
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 600;
  border-bottom: 1px solid var(--el-border-color-light);
}

.admin-layout__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--el-border-color-light);
}

.admin-layout__title {
  font-size: 16px;
  font-weight: 500;
}

.admin-layout__main {
  background: var(--el-bg-color-page);
}
</style>
