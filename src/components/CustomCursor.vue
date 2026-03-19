<template>
  <!-- 自定义光标组件 -->
  <div 
    v-show="showCursor" 
    class="custom-cursor"
    :class="{ 'hover': isHovering, 'active': isActive }"
    :style="{ left: cursorX + 'px', top: cursorY + 'px' }"
    aria-hidden="true"
  ></div>
  <div 
    v-show="showCursor" 
    class="cursor-trail"
    :class="{ 'hover': isHovering, 'active': isActive }"
    :style="{ left: trailX + 'px', top: trailY + 'px' }"
    aria-hidden="true"
  ></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';

// 响应式数据
const cursorX = ref(0);
const cursorY = ref(0);
const trailX = ref(0);
const trailY = ref(0);
const isHovering = ref(false);
const isActive = ref(false);
const isMobile = ref(false);

// 计算是否显示光标（非移动设备显示）
const showCursor = computed(() => !isMobile.value);

// 检查是否为移动设备
const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768;
};

// 处理鼠标移动
const handleMouseMove = (e) => {
  cursorX.value = e.clientX;
  cursorY.value = e.clientY;
};

// 处理元素悬停
const handleMouseEnter = () => {
  isHovering.value = true;
};

const handleMouseLeave = () => {
  isHovering.value = false;
};

// 处理鼠标按下
const handleMouseDown = () => {
  isActive.value = true;
};

// 处理鼠标释放
const handleMouseUp = () => {
  isActive.value = false;
};

// 平滑更新轨迹位置
let rafId = null;

const updateTrailPosition = () => {
  if (showCursor.value) {
    const dx = cursorX.value - trailX.value;
    const dy = cursorY.value - trailY.value;
    
    trailX.value += dx * 0.2;
    trailY.value += dy * 0.2;
  }
  
  rafId = requestAnimationFrame(updateTrailPosition);
};

// 为可交互元素添加事件监听
const setupInteractiveListeners = () => {
  const interactiveElements = document.querySelectorAll('a, button, .todoItem, .techItem, .theme-toggle');
  
  interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);
  });
  
  // 返回清理函数
  return () => {
    interactiveElements.forEach(element => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    });
  };
};

// 清理函数引用
let cleanupInteractiveListeners = null;

// 生命周期钩子
onMounted(() => {
  checkMobile();
  
  // 添加全局事件监听
  window.addEventListener('resize', checkMobile);
  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mousedown', handleMouseDown);
  document.addEventListener('mouseup', handleMouseUp);
  
  // 设置可交互元素的监听器
  cleanupInteractiveListeners = setupInteractiveListeners();
  
  // 开始动画循环
  updateTrailPosition();
});

onUnmounted(() => {
  if (rafId) {
    cancelAnimationFrame(rafId);
  }
  window.removeEventListener('resize', checkMobile);
  document.removeEventListener('mousemove', handleMouseMove);
  document.removeEventListener('mousedown', handleMouseDown);
  document.removeEventListener('mouseup', handleMouseUp);
  if (cleanupInteractiveListeners) {
    cleanupInteractiveListeners();
  }
});
</script>

<style scoped>
.custom-cursor {
  width: 20px;
  height: 20px;
  border: 2px solid var(--primary-color, #3b82f6);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
  transition: transform 0.2s ease, background-color 0.2s ease;
  transform: translate(-50%, -50%);
  will-change: left, top, transform;
}

.cursor-trail {
  width: 8px;
  height: 8px;
  background-color: var(--primary-color, #3b82f6);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9998;
  mix-blend-mode: difference;
  transition: transform 0.1s ease, width 0.2s ease, height 0.2s ease, opacity 0.2s ease;
  transform: translate(-50%, -50%);
  will-change: left, top, transform;
}

/* 悬停状态 */
.custom-cursor.hover {
  transform: translate(-50%, -50%) scale(1.5);
  background-color: rgba(59, 130, 246, 0.1);
  mix-blend-mode: normal;
}

.cursor-trail.hover {
  transform: translate(-50%, -50%) scale(0.5);
  opacity: 0.5;
}

/* 点击状态 */
.custom-cursor.active {
  transform: translate(-50%, -50%) scale(0.8);
}

.cursor-trail.active {
  transform: translate(-50%, -50%) scale(0.3);
}

/* 深色主题适配 */
:global([theme='dark']) .custom-cursor {
  border-color: var(--primary-color, #60a5fa);
}

:global([theme='dark']) .cursor-trail {
  background-color: var(--primary-color, #60a5fa);
}
</style>