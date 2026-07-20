<template>
  <div class="ink-background" aria-hidden="true">
    <!-- 远山 - 极淡，意境为主 -->
    <div class="mountains mountains-far"></div>
    <div class="mountains mountains-mid"></div>

    <!-- 云雾 - 飘渺流动 -->
    <div class="clouds clouds-1"></div>
    <div class="clouds clouds-2"></div>
    <div class="clouds clouds-3"></div>

    <!-- 飞鸟 - 极简几笔 -->
    <div class="birds">
      <div class="bird bird-1"></div>
      <div class="bird bird-2"></div>
      <div class="bird bird-3"></div>
    </div>

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

    <!-- 左侧淡墨竹影 -->
    <div class="bamboo bamboo-left"></div>

    <!-- 右侧淡墨兰草 -->
    <div class="bamboo bamboo-right"></div>

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
  </div>
</template>

<script setup>
import { inject } from 'vue'

const theme = inject('theme')
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

/* 远山 - 远山淡影，追求意境 */
.mountains {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-repeat: repeat-x;
  background-size: 60% 100%;
}

.mountains-far {
  height: 35%;
  opacity: 0.04;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 200' preserveAspectRatio='none'%3E%3Cpath d='M0,200 L0,130 Q80,90 150,110 Q220,60 300,100 Q380,50 450,90 Q480,80 500,100 L500,200 Z' fill='%232a2a2a'/%3E%3C/svg%3E");
  animation: mountainDrift 80s ease-in-out infinite;
}

.mountains-mid {
  height: 25%;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 200' preserveAspectRatio='none'%3E%3Cpath d='M0,200 L0,150 Q100,110 180,130 Q260,80 340,120 Q400,90 500,140 L500,200 Z' fill='%231a1a1a'/%3E%3C/svg%3E");
  animation: mountainDrift 60s ease-in-out infinite reverse;
}

@keyframes mountainDrift {
  0%,
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-3%);
  }
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
  opacity: 0.08;
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
    opacity: 0.08;
  }
  90% {
    opacity: 0.08;
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

/* 左侧竹影 - 极简几笔，意境为主 */
.bamboo {
  position: absolute;
  top: 0;
  width: 120px;
  height: 100%;
  opacity: 0.03;
  background-repeat: no-repeat;
  background-size: contain;
}

.bamboo-left {
  left: -10px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 600' preserveAspectRatio='xMidYMax meet'%3E%3Cg stroke='%231a1a1a' stroke-width='2' fill='none' stroke-linecap='round'%3E%3Cpath d='M20,600 L20,50 Q30,40 25,30 L25,10'/%3E%3Cpath d='M50,600 L50,100 Q60,90 55,80 L55,60'/%3E%3Cpath d='M15,400 Q5,390 0,400' stroke-width='1.5'/%3E%3Cpath d='M25,300 Q15,290 10,300' stroke-width='1.5'/%3E%3Cpath d='M20,200 Q10,190 5,200' stroke-width='1.5'/%3E%3Cpath d='M45,350 Q55,340 60,350' stroke-width='1.5'/%3E%3Cpath d='M50,250 Q60,240 65,250' stroke-width='1.5'/%3E%3C/g%3E%3C/svg%3E");
  background-position: bottom left;
}

.bamboo-right {
  right: -20px;
  transform: scaleX(-1);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 500' preserveAspectRatio='xMidYMax meet'%3E%3Cg stroke='%231a1a1a' stroke-width='1.5' fill='none' stroke-linecap='round'%3E%3Cpath d='M30,500 L30,80 Q40,70 35,60'/%3E%3Cpath d='M55,500 L55,150 Q65,140 60,130'/%3E%3Cpath d='M25,350 Q15,340 10,350'/%3E%3Cpath d='M30,250 Q20,240 15,250'/%3E%3Cpath d='M50,400 Q60,390 65,400'/%3E%3Cpath d='M55,300 Q65,290 70,300'/%3E%3C/g%3E%3C/svg%3E");
  background-position: bottom right;
  opacity: 0.025;
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

/* 深色主题适配 */
:global([theme='dark']) .mountains-far {
  opacity: 0.06;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 200' preserveAspectRatio='none'%3E%3Cpath d='M0,200 L0,130 Q80,90 150,110 Q220,60 300,100 Q380,50 450,90 Q480,80 500,100 L500,200 Z' fill='%23c0b8a8'/%3E%3C/svg%3E");
}

:global([theme='dark']) .mountains-mid {
  opacity: 0.05;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 200' preserveAspectRatio='none'%3E%3Cpath d='M0,200 L0,150 Q100,110 180,130 Q260,80 340,120 Q400,90 500,140 L500,200 Z' fill='%23d4cfc4'/%3E%3C/svg%3E");
}

:global([theme='dark']) .bamboo {
  opacity: 0.04;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 600' preserveAspectRatio='xMidYMax meet'%3E%3Cg stroke='%23c0b8a8' stroke-width='2' fill='none' stroke-linecap='round'%3E%3Cpath d='M20,600 L20,50 Q30,40 25,30 L25,10'/%3E%3Cpath d='M50,600 L50,100 Q60,90 55,80 L55,60'/%3E%3Cpath d='M15,400 Q5,390 0,400' stroke-width='1.5'/%3E%3Cpath d='M25,300 Q15,290 10,300' stroke-width='1.5'/%3E%3Cpath d='M20,200 Q10,190 5,200' stroke-width='1.5'/%3E%3Cpath d='M45,350 Q55,340 60,350' stroke-width='1.5'/%3E%3Cpath d='M50,250 Q60,240 65,250' stroke-width='1.5'/%3E%3C/g%3E%3C/svg%3E");
}

:global([theme='dark']) .bamboo-right {
  opacity: 0.035;
}

:global([theme='dark']) .seal-corner {
  opacity: 0.2;
}

/* 暗色模式：云雾 */
:global([theme='dark']) .clouds {
  background: radial-gradient(ellipse at center, #a8a49c 0%, transparent 70%);
  opacity: 0.04;
}

:global([theme='dark']) .clouds-3 {
  opacity: 0.025;
}

/* 暗色模式：飞鸟 */
:global([theme='dark']) .bird::before,
:global([theme='dark']) .bird::after {
  background: #c0b8a8;
}

:global([theme='dark']) .birds {
  opacity: 0.1;
}

/* 暗色模式：扁舟 */
:global([theme='dark']) .boat {
  opacity: 0.5;
}

/* 移动端简化背景 */
@media (max-width: 768px) {
  .bamboo {
    opacity: 0.02;
    width: 80px;
  }

  .seal-corner {
    width: 28px;
    height: 28px;
    font-size: 12px;
    bottom: 20px;
    left: 20px;
  }
}

@media (max-width: 480px) {
  .bamboo {
    display: none;
  }

  .mountains-far {
    opacity: 0.03;
  }

  .mountains-mid {
    opacity: 0.02;
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

:global([theme='dark']) .night-stars {
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
</style>
