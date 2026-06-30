<script setup lang="ts">
const stats = [
  { label: '课程目录', value: '0' },
  { label: '学习阶段', value: '8' },
  { label: '学习任务', value: '0' },
  { label: '文档数量', value: '1' },
]
</script>

<template>
  <div class="dashboard-page">
    <el-row :gutter="16">
      <el-col v-for="item in stats" :key="item.label" :span="6">
        <el-card shadow="never">
          <div class="dashboard-page__label">{{ item.label }}</div>
          <div class="dashboard-page__value">{{ item.value }}</div>
        </el-card>
      </el-col>
    </el-row>

    <el-card class="dashboard-page__welcome" shadow="never">
      <h2>欢迎使用知航 AI</h2>
      <p>当前处于第一阶段：前端管理后台闭环。接下来可以逐步补齐用户、角色、课程、学习阶段和文档管理页面。</p>
    </el-card>
  </div>
</template>

<style scoped>
.dashboard-page__label {
  color: var(--el-text-color-secondary);
  margin-bottom: 8px;
}

.dashboard-page__value {
  font-size: 28px;
  font-weight: 600;
}

.dashboard-page__welcome {
  margin-top: 16px;
}

.dashboard-page__welcome h2 {
  margin-top: 0;
}
</style>
