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
import MainCard from "./views/MainCard.vue";
import ParticlesBackground from './components/ParticlesBackground.vue';
import CustomCursor from './components/CustomCursor.vue';
import { provide } from "vue";
import { useTheme } from './composables/useTheme';

const { theme, changeTheme, initTheme } = useTheme();

// 提供主题给子组件
provide('theme', theme);
provide('changeTheme', changeTheme);
</script>

<style>
@import url(assets/css/App.css);

/* 全局样式重置 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  cursor: none;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  background-color: #f5f5f5;
  color: #333;
  transition: background-color 0.3s, color 0.3s;
  overflow-x: hidden;
}

/* 应用容器 */
.app {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  opacity: 1;
  transition: background-color 0.3s ease, color 0.3s ease;
  position: relative;
}

/* 链接和按钮的自定义光标 */
a, button {
  position: relative;
  z-index: 10;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .app {
    padding: 15px;
  }
  
  * {
    cursor: default;
  }
}

@media (max-width: 480px) {
  .app {
    padding: 10px;
  }
}
</style>
