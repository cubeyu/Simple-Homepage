<template>
  <a
    class="linkBtn hover"
    :href="url ? url : '#'"
    target="_blank"
    :style="{ background: color }"
  >
    <Icon :icon="icon" width="36" height="36" />
    <span>{{ text }}</span>
  </a>
</template>
<script setup>
import { Icon } from "@iconify/vue";

const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: '#3b82f6'
  },
  url: {
    type: String,
    default: '#'
  }
});
</script>
<style>
.linkBtn {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  height: 40px;
  border-radius: 16px;
  padding: 0.5rem 1rem;
  margin: 0.5rem 0;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  color: #fff;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;

  & span {
    margin-left: 0.5rem;
    transition: all 0.3s ease;
  }
  
  /* 增强PC端交互效果 */
  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    border-color: rgba(255, 255, 255, 0.3);
    
    & .iconify {
      transform: scale(1.1) rotate(5deg);
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: all 0.6s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  /* 优化PC端尺寸 */
  @media (min-width: 769px) {
    height: 48px;
    padding: 0.6rem 1.2rem;
    font-size: 19px;
  }
}
</style>
