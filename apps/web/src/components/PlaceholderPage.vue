<script setup lang="ts">
defineOptions({
  name: 'PlaceholderPage',
})

defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <el-card shadow="never">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
  </el-card>
</template>

<style scoped>
h2 {
  margin-top: 0;
}

p {
  margin-bottom: 0;
  color: var(--el-text-color-secondary);
}
</style>
