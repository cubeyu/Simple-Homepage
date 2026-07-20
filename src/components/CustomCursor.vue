<template>
  <div>
    <div
      class="custom-cursor"
      :class="{ hover: isHovering, active: isActive }"
      :style="{ left: cursorX + 'px', top: cursorY + 'px' }"
    ></div>
    <div
      class="cursor-trail"
      :class="{ hover: isHovering, active: isActive }"
      :style="{ left: trailX + 'px', top: trailY + 'px' }"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const cursorX = ref(0)
const cursorY = ref(0)
const trailX = ref(0)
const trailY = ref(0)
const isHovering = ref(false)
const isActive = ref(false)

let animationFrameId = null
let lastMoveTime = 0

const handleMouseMove = (e) => {
  cursorX.value = e.clientX
  cursorY.value = e.clientY
  lastMoveTime = Date.now()
  ensureTrailLoop()
}

const handleMouseDown = () => {
  isActive.value = true
}

const handleMouseUp = () => {
  isActive.value = false
}

const HOVER_SELECTOR = 'a, button, .hover, [role="button"], input, textarea'

const handleHover = (e) => {
  const target = e.target
  isHovering.value = !!(
    target &&
    typeof target.closest === 'function' &&
    target.closest(HOVER_SELECTOR)
  )
}

const hasFinePointer = () => window.matchMedia && window.matchMedia('(pointer: fine)').matches

const checkPrimaryInput = () => {
  return navigator.maxTouchPoints > 0 && !hasFinePointer()
}

const animateTrail = () => {
  trailX.value += (cursorX.value - trailX.value) * 0.15
  trailY.value += (cursorY.value - trailY.value) * 0.15
  animationFrameId = requestAnimationFrame(animateTrail)
}

const ensureTrailLoop = () => {
  if (animationFrameId) return
  const tick = () => {
    trailX.value += (cursorX.value - trailX.value) * 0.15
    trailY.value += (cursorY.value - trailY.value) * 0.15
    const idle = Date.now() - lastMoveTime > 1500
    animationFrameId = idle ? null : requestAnimationFrame(tick)
  }
  animationFrameId = requestAnimationFrame(tick)
}

onMounted(() => {
  if (checkPrimaryInput()) {
    return
  }

  document.body.style.cursor = 'none'

  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mousedown', handleMouseDown)
  document.addEventListener('mouseup', handleMouseUp)
  document.addEventListener('mouseover', handleHover)

  animateTrail()
})

onUnmounted(() => {
  document.body.style.cursor = ''

  document.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('mousedown', handleMouseDown)
  document.removeEventListener('mouseup', handleMouseUp)
  document.removeEventListener('mouseover', handleHover)

  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }
})
</script>

<style scoped>
.custom-cursor {
  width: 8px;
  height: 8px;
  background-color: var(--seal-red);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  transition:
    transform 0.15s ease,
    opacity 0.15s ease;
  opacity: 0.7;
}

.cursor-trail {
  width: 4px;
  height: 4px;
  background-color: var(--ink-zhong);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9998;
  transform: translate(-50%, -50%);
  opacity: 0.4;
  transition:
    transform 0.2s ease,
    opacity 0.2s ease;
}

/* 悬停状态 - 淡墨扩散 */
.custom-cursor.hover {
  transform: translate(-50%, -50%) scale(1.8);
  opacity: 0.4;
  background-color: var(--ink-dan);
}

.cursor-trail.hover {
  transform: translate(-50%, -50%) scale(0.5);
  opacity: 0.2;
}

/* 点击状态 - 墨点收缩 */
.custom-cursor.active {
  transform: translate(-50%, -50%) scale(0.7);
  opacity: 0.9;
  background-color: var(--seal-red);
}

.cursor-trail.active {
  transform: translate(-50%, -50%) scale(0.3);
  opacity: 0.6;
}

/* 深色主题适配 */
:global([theme='dark']) .custom-cursor {
  background-color: var(--seal-red);
}

:global([theme='dark']) .cursor-trail {
  background-color: var(--ink-zhong);
}
</style>
