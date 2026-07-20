<template>
  <div class="ink-background" aria-hidden="true">
    <!-- 水墨画背景图 -->
    <div class="ink-painting-bg"></div>

    <!-- 云雾 - 飘渺流动 -->
    <div class="clouds clouds-1"></div>
    <div class="clouds clouds-2"></div>
    <div class="clouds clouds-3"></div>

    <!-- 飞鸟 - 极简几笔（提亮可见） -->
    <div class="birds">
      <div class="bird bird-1"></div>
      <div class="bird bird-2"></div>
      <div class="bird bird-3"></div>
    </div>

    <!-- 淡墨灰日 - 天空一抹水墨圆（亮色模式） -->
    <div class="sun"></div>

    <!-- 扁舟 - 远山下的一叶扁舟 -->
    <div class="boat" aria-hidden="true">
      <svg viewBox="0 0 60 30" class="boat-svg">
        <path
          d="M5 20 Q15 18 30 20 Q45 22 55 20 L50 25 Q30 28 10 25 Z"
          fill="var(--ink-zhong)"
          opacity="0.15"
        />
        <path
          d="M28 8 L28 18"
          stroke="var(--ink-dan)"
          stroke-width="1.5"
          opacity="0.2"
          stroke-linecap="round"
        />
        <path
          d="M28 10 Q35 12 38 18"
          stroke="var(--ink-qing)"
          stroke-width="1"
          opacity="0.15"
          fill="none"
          stroke-linecap="round"
        />
      </svg>
    </div>

    <!-- 暗色模式：星月 -->
    <div class="night-stars" v-if="theme === 'dark'">
      <div class="star star-1"></div>
      <div class="star star-2"></div>
      <div class="star star-3"></div>
      <div class="star star-4"></div>
      <div class="star star-5"></div>
      <div class="moon"></div>
    </div>

    <!-- 一枚闲章 - 左下角 -->
    <div class="seal-corner seal-bottom-left">墨</div>

    <!-- 鼠标墨水划过层（锋利笔触） -->
    <div class="ink-trail-layer" ref="trailLayer"></div>
  </div>
</template>

<script setup>
import { inject, ref, onMounted, onUnmounted } from 'vue'

const theme = inject('theme')
const trailLayer = ref(null)

let lastX = 0
let lastY = 0
let initialized = false

// 锋利的墨水划过：沿鼠标移动方向生成一段尖头墨笔触
function createStroke(x0, y0, x1, y1) {
  if (!trailLayer.value) return
  const dx = x1 - x0
  const dy = y1 - y0
  const dist = Math.sqrt(dx * dx + dy * dy)
  if (dist < 2) return // 太短不画，避免静止抖动产生噪点

  const el = document.createElement('div')
  el.className = 'ink-stroke'
  const angle = (Math.atan2(dy, dx) * 180) / Math.PI
  el.style.left = x0 + 'px'
  el.style.top = y0 + 'px'
  el.style.width = dist + 'px'
  el.style.transform = `rotate(${angle}deg)`
  // 笔触粗细与浓度略带随机，但保持锋利边缘
  el.style.setProperty('--stroke-w', (1.5 + Math.random() * 1.5).toFixed(2) + 'px')
  el.style.setProperty('--stroke-a', (0.4 + Math.random() * 0.2).toFixed(2))
  trailLayer.value.appendChild(el)
  setTimeout(() => el.remove(), 600)
}

function onMouseMove(e) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  if (!initialized) {
    lastX = e.clientX
    lastY = e.clientY
    initialized = true
    return
  }
  createStroke(lastX, lastY, e.clientX, e.clientY)
  lastX = e.clientX
  lastY = e.clientY
}

onMounted(() => {
  window.addEventListener('mousemove', onMouseMove, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
})
</script>

<style scoped>
.ink-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
  overflow: hidden;
}

/* 水墨画背景图 */
.ink-painting-bg {
  position: absolute;
  inset: 0;
  background-image: url('/bg-inkwash.png');
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  opacity: 0.9;
}

/* 暗色模式：压暗并加一层夜色调 */
:global([theme='dark'] .ink-painting-bg) {
  opacity: 0.55;
  filter: brightness(0.6) saturate(0.8);
}

/* 云雾 - 飘渺流动，极淡 */
.clouds {
  position: absolute;
  width: 300px;
  height: 80px;
  background: radial-gradient(ellipse at center, var(--ink-qing) 0%, transparent 70%);
  opacity: 0.03;
  filter: blur(20px);
  pointer-events: none;
}

.clouds-1 {
  top: 15%;
  left: -10%;
  animation: cloudDrift 100s linear infinite;
}

.clouds-2 {
  top: 25%;
  width: 400px;
  height: 100px;
  animation: cloudDrift 150s linear infinite reverse;
  animation-delay: -30s;
}

.clouds-3 {
  top: 35%;
  width: 250px;
  height: 60px;
  opacity: 0.02;
  animation: cloudDrift 120s linear infinite;
  animation-delay: -60s;
}

@keyframes cloudDrift {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(100vw + 400px));
  }
}

/* 飞鸟 - 极简水墨，一字/人字队形 */
.birds {
  position: absolute;
  top: 12%;
  left: 20%;
  width: 120px;
  height: 60px;
  opacity: 0.4;
  animation: birdFly 80s linear infinite;
}

.bird {
  position: absolute;
  width: 16px;
  height: 8px;
  background: transparent;
}

.bird::before,
.bird::after {
  content: '';
  position: absolute;
  top: 4px;
  width: 8px;
  height: 2px;
  background: var(--ink-zhong);
  border-radius: 50%;
}

.bird::before {
  left: 0;
  transform: rotate(-15deg);
  transform-origin: right center;
  animation: wingFlap 1.5s ease-in-out infinite;
}

.bird::after {
  right: 0;
  transform: rotate(15deg);
  transform-origin: left center;
  animation: wingFlap 1.5s ease-in-out infinite reverse;
}

.bird-1 {
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

.bird-2 {
  top: 25px;
  left: 25%;
  animation-delay: -0.3s;
}

.bird-3 {
  top: 25px;
  right: 25%;
  animation-delay: -0.6s;
}

@keyframes wingFlap {
  0%,
  100% {
    transform: rotate(-20deg);
  }
  50% {
    transform: rotate(10deg);
  }
}

@keyframes birdFly {
  0% {
    transform: translateX(0) translateY(0);
    opacity: 0;
  }
  10% {
    opacity: 0.4;
  }
  90% {
    opacity: 0.4;
  }
  100% {
    transform: translateX(calc(100vw + 200px)) translateY(-30px);
    opacity: 0;
  }
}

/* 扁舟 - 远山脚下的一叶小舟 */
.boat {
  position: absolute;
  bottom: 18%;
  right: 15%;
  width: 60px;
  height: 30px;
  opacity: 0.6;
  animation: boatFloat 8s ease-in-out infinite;
}

.boat-svg {
  width: 100%;
  height: 100%;
}

@keyframes boatFloat {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-3px) rotate(1deg);
  }
  50% {
    transform: translateY(0) rotate(0deg);
  }
  75% {
    transform: translateY(-2px) rotate(-1deg);
  }
}

/* 闲章 - 左下角 */
.seal-corner {
  position: absolute;
  bottom: 30px;
  left: 30px;
  width: 36px;
  height: 36px;
  border: 1.5px solid var(--seal-red);
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: var(--seal-red);
  opacity: 0.15;
  font-family: var(--font-family);
  transform: rotate(-8deg);
  letter-spacing: 0;
}

/* 暗色模式适配 */
:global([theme='dark'] .clouds) {
  background: radial-gradient(ellipse at center, #a8a49c 0%, transparent 70%);
  opacity: 0.04;
}

:global([theme='dark'] .clouds-3) {
  opacity: 0.025;
}

:global([theme='dark'] .bird::before),
:global([theme='dark'] .bird::after) {
  background: #c0b8a8;
}

:global([theme='dark'] .birds) {
  opacity: 0.45;
}

:global([theme='dark'] .boat) {
  opacity: 0.5;
}

:global([theme='dark'] .seal-corner) {
  opacity: 0.2;
}

/* 移动端简化 */
@media (max-width: 768px) {
  .seal-corner {
    width: 28px;
    height: 28px;
    font-size: 12px;
    bottom: 20px;
    left: 20px;
  }

  .ink-painting-bg {
    background-position: 60% bottom;
  }
}

@media (max-width: 480px) {
  .ink-painting-bg {
    opacity: 0.85;
  }
}

/* 暗色模式：星月 - 夜墨风格 */
.night-stars {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.8s ease;
}

:global([theme='dark'] .night-stars) {
  opacity: 1;
}

.night-stars .star {
  position: absolute;
  width: 3px;
  height: 3px;
  background: #e8e4dc;
  border-radius: 50%;
  opacity: 0.6;
  animation: twinkle 4s ease-in-out infinite;
}

.night-stars .star-1 {
  top: 12%;
  left: 15%;
  animation-delay: 0s;
}
.night-stars .star-2 {
  top: 8%;
  left: 70%;
  animation-delay: 1s;
  width: 2px;
  height: 2px;
}
.night-stars .star-3 {
  top: 20%;
  left: 85%;
  animation-delay: 2s;
}
.night-stars .star-4 {
  top: 25%;
  left: 30%;
  animation-delay: 1.5s;
  width: 2px;
  height: 2px;
  opacity: 0.4;
}
.night-stars .star-5 {
  top: 15%;
  left: 50%;
  animation-delay: 0.5s;
  opacity: 0.5;
}

@keyframes twinkle {
  0%,
  100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.2);
  }
}

.night-stars .moon {
  position: absolute;
  top: 10%;
  right: 12%;
  width: 55px;
  height: 55px;
  background: radial-gradient(circle at 35% 35%, #f0ece4 0%, #d8d4cc 60%, #b8b4ac 100%);
  border-radius: 50%;
  opacity: 0.12;
  box-shadow:
    0 0 40px 10px rgba(232, 228, 220, 0.08),
    0 0 80px 20px rgba(232, 228, 220, 0.04);
}

.night-stars .moon::before {
  content: '';
  position: absolute;
  top: -4px;
  left: 7px;
  width: 42px;
  height: 42px;
  background: #0a0e14;
  border-radius: 50%;
  opacity: 0.8;
}

/* 淡墨灰日 - 天空一抹水墨圆（亮色模式） */
.sun {
  position: absolute;
  top: 13%;
  right: 19%;
  width: 74px;
  height: 74px;
  border-radius: 50%;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(120, 124, 130, 0.20) 0%,
    rgba(120, 124, 130, 0.10) 58%,
    transparent 72%
  );
  border: 1.5px solid rgba(86, 90, 96, 0.38);
  opacity: 0.55;
  animation: sunBreathe 12s ease-in-out infinite;
}

@keyframes sunBreathe {
  0%,
  100% {
    opacity: 0.45;
  }
  50% {
    opacity: 0.62;
  }
}

/* 暗色模式不显示太阳（保留月亮） */
:global([theme='dark'] .sun) {
  display: none;
}

/* 鼠标墨水划过层（锋利笔触） */
.ink-trail-layer {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 1;
}

.ink-trail-layer :deep(.ink-stroke) {
  position: absolute;
  height: var(--stroke-w, 2px);
  transform-origin: left center;
  background: linear-gradient(
    to right,
    transparent 0%,
    var(--ink-zhong) 40%,
    var(--ink-zhong) 100%
  );
  opacity: var(--stroke-a, 0.5);
  border-radius: 0; /* 锋利边缘，不模糊 */
  animation: inkStrokeFade 0.6s ease-out forwards;
  pointer-events: none;
}

@keyframes inkStrokeFade {
  0% {
    opacity: var(--stroke-a, 0.5);
  }
  100% {
    opacity: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .ink-trail-layer :deep(.ink-stroke) {
    animation: none;
  }
}
</style>
