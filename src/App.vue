<template>
  <div class="app">
    <!-- 粒子背景 -->
    <ParticlesBackground />
    <!-- 自定义鼠标光标效果 -->
    <CustomCursor />
    <!-- 主卡片内容 -->
    <main-card></main-card>
  </div>
</template>

<script setup>
import MainCard from './views/MainCard.vue'
import ParticlesBackground from './components/ParticlesBackground.vue'
import CustomCursor from './components/CustomCursor.vue'
import { provide } from 'vue'
import { useTheme } from './composables/useTheme'

const { theme, changeTheme, initTheme } = useTheme()

// 提供主题给子组件
provide('theme', theme)
provide('changeTheme', changeTheme)
</script>

<style>
@import url(assets/css/App.css);

/* 全局样式重置 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-family);
  background: var(--background);
  background-color: var(--background-solid);
  background-attachment: fixed;
  color: var(--text-color);
  transition: color 0.3s ease;
  overflow-x: hidden;
  min-height: 100vh;
}

/* 应用容器 */
.app {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  opacity: 1;
  position: relative;
}

/* 链接和按钮的自定义光标 */
a,
button {
  position: relative;
  z-index: 10;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .app {
    padding: 15px;
  }
}

@media (max-width: 480px) {
  .app {
    padding: 10px;
  }
}
</style>
