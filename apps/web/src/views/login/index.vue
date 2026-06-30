<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

import { getAppTitle } from '@/utils'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const userStore = useUserStore()
const loading = ref(false)

const form = reactive({
  username: 'admin',
  password: '123456',
})

async function handleLogin() {
  loading.value = true
  try {
    // 第一阶段使用本地 Mock 登录，后续替换为真实接口
    userStore.setToken('mock-token')
    userStore.setUserInfo({
      id: 1,
      username: form.username,
      nickname: '管理员',
      roles: ['admin'],
    })
    ElMessage.success('登录成功')
    await router.push('/dashboard')
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="login-page">
    <el-card class="login-page__card" shadow="hover">
      <h1 class="login-page__title">{{ getAppTitle() }}</h1>
      <p class="login-page__subtitle">个人学习路线知识库与 AI 学习教练</p>

      <el-form :model="form" label-position="top" @submit.prevent="handleLogin">
        <el-form-item label="用户名">
          <el-input v-model="form.username" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            v-model="form.password"
            type="password"
            show-password
            placeholder="请输入密码"
          />
        </el-form-item>
        <el-button type="primary" class="login-page__submit" :loading="loading" native-type="submit">
          登录
        </el-button>
      </el-form>
    </el-card>
  </div>
</template>

<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #eef2ff 0%, #f8fafc 100%);
}

.login-page__card {
  width: 420px;
}

.login-page__title {
  margin: 0;
  font-size: 24px;
  text-align: center;
}

.login-page__subtitle {
  margin: 8px 0 24px;
  color: var(--el-text-color-secondary);
  text-align: center;
}

.login-page__submit {
  width: 100%;
}
</style>
