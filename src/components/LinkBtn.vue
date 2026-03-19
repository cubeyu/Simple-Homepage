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
  font-size: 16px;
  font-weight: 500;
  height: 44px;
  border-radius: 14px;
  padding: 0.6rem 1.2rem;
  margin: 0;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  color: #fff;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: none;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);

  /* 渐变叠加层 */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, transparent 50%, rgba(0, 0, 0, 0.1) 100%);
    z-index: 1;
    pointer-events: none;
  }

  /* 流光效果 */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -150%;
    width: 150%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transition: left 0.7s ease;
    z-index: 2;
    pointer-events: none;
  }

  & span {
    margin-left: 0.5rem;
    transition: all 0.3s ease;
    position: relative;
    z-index: 3;
  }

  & .iconify {
    position: relative;
    z-index: 3;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* 悬停效果 */
  &:hover {
    transform: translateY(-4px) scale(1.03);
    box-shadow: 
      0 12px 28px rgba(0, 0, 0, 0.25),
      0 0 20px var(--theme-glow, rgba(255, 107, 157, 0.3));
  }

  &:hover::after {
    left: 100%;
  }

  &:hover .iconify {
    transform: scale(1.15) rotate(8deg);
    filter: drop-shadow(0 0 6px rgba(255, 255, 255, 0.5));
  }

  &:hover span {
    transform: translateX(3px);
  }

  /* 点击效果 */
  &:active {
    transform: translateY(-2px) scale(1.01);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  }

  /* 优化PC端尺寸 */
  @media (min-width: 769px) {
    height: 50px;
    padding: 0.7rem 1.4rem;
    font-size: 17px;
    border-radius: 16px;
  }

  @media (min-width: 1200px) {
    height: 52px;
    padding: 0.8rem 1.6rem;
    font-size: 18px;
  }
}
</style>
