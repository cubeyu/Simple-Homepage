<template>
  <div class="mainCard" role="main">
    <!-- 顶部卷轴杆（共享渐变/滤镜定义） -->
    <div class="scroll-rod scroll-top" aria-hidden="true">
      <svg viewBox="0 0 800 30" class="scroll-rod-svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="scrollRodGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color: var(--ink-qing); stop-opacity: 0.3" />
            <stop offset="20%" style="stop-color: var(--ink-dan); stop-opacity: 0.6" />
            <stop offset="50%" style="stop-color: var(--ink-zhong); stop-opacity: 0.8" />
            <stop offset="80%" style="stop-color: var(--ink-dan); stop-opacity: 0.5" />
            <stop offset="100%" style="stop-color: var(--ink-qing); stop-opacity: 0.25" />
          </linearGradient>
          <linearGradient id="scrollRodHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color: var(--ink-qing); stop-opacity: 0" />
            <stop offset="30%" style="stop-color: var(--ink-dan); stop-opacity: 0.2" />
            <stop offset="50%" style="stop-color: var(--ink-zhong); stop-opacity: 0.1" />
            <stop offset="100%" style="stop-color: var(--ink-qing); stop-opacity: 0" />
          </linearGradient>
          <filter id="scrollRodBlur">
            <feGaussianBlur stdDeviation="0.5" />
          </filter>
        </defs>
        <rect x="0" y="8" width="800" height="14" rx="7" fill="url(#scrollRodGrad)" opacity="0.7" />
        <rect
          x="0"
          y="10"
          width="800"
          height="4"
          rx="2"
          fill="url(#scrollRodHighlight)"
          opacity="0.5"
        />
        <linearGradient id="capGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color: var(--ink-zhong); stop-opacity: 0.7" />
          <stop offset="30%" style="stop-color: var(--ink-nong); stop-opacity: 0.9" />
          <stop offset="70%" style="stop-color: var(--ink-zhong); stop-opacity: 0.8" />
          <stop offset="100%" style="stop-color: var(--ink-qing); stop-opacity: 0.5" />
        </linearGradient>
        <radialGradient id="capSealGrad" cx="30%" cy="30%" r="70%">
          <stop offset="0%" style="stop-color: var(--seal-red-light); stop-opacity: 0.9" />
          <stop offset="60%" style="stop-color: var(--seal-red); stop-opacity: 0.8" />
          <stop offset="100%" style="stop-color: var(--seal-red); stop-opacity: 0.6" />
        </radialGradient>
      </svg>
      <div class="scroll-cap scroll-cap-left">
        <svg viewBox="0 0 30 40" class="scroll-cap-svg">
          <ellipse cx="15" cy="20" rx="12" ry="16" fill="url(#capGrad)" opacity="0.8" />
          <ellipse cx="15" cy="20" rx="8" ry="11" fill="url(#capSealGrad)" opacity="0.7" />
          <ellipse cx="12" cy="16" rx="3" ry="4" fill="var(--seal-red-light)" opacity="0.4" />
        </svg>
      </div>
      <div class="scroll-cap scroll-cap-right">
        <svg viewBox="0 0 30 40" class="scroll-cap-svg">
          <ellipse cx="15" cy="20" rx="12" ry="16" fill="url(#capGrad)" opacity="0.8" />
          <ellipse cx="15" cy="20" rx="8" ry="11" fill="url(#capSealGrad)" opacity="0.7" />
          <ellipse cx="18" cy="16" rx="3" ry="4" fill="var(--seal-red-light)" opacity="0.4" />
        </svg>
      </div>
    </div>

    <!-- 底部卷轴杆（复用顶部定义，避免重复 ID） -->
    <div class="scroll-rod scroll-bottom" aria-hidden="true">
      <svg viewBox="0 0 800 30" class="scroll-rod-svg" preserveAspectRatio="none">
        <use href="#scrollRodGrad" aria-hidden="true" />
        <use href="#scrollRodHighlight" aria-hidden="true" />
        <rect x="0" y="8" width="800" height="14" rx="7" fill="url(#scrollRodGrad)" opacity="0.7" />
        <rect
          x="0"
          y="16"
          width="800"
          height="4"
          rx="2"
          fill="url(#scrollRodHighlight)"
          opacity="0.4"
        />
      </svg>
      <div class="scroll-cap scroll-cap-left">
        <svg viewBox="0 0 30 40" class="scroll-cap-svg">
          <ellipse cx="15" cy="20" rx="12" ry="16" fill="url(#capGrad)" opacity="0.8" />
          <ellipse cx="15" cy="20" rx="8" ry="11" fill="url(#capSealGrad)" opacity="0.7" />
          <ellipse cx="12" cy="16" rx="3" ry="4" fill="var(--seal-red-light)" opacity="0.4" />
        </svg>
        <div class="scroll-tassel">
          <span class="tassel-string tassel-1"></span>
          <span class="tassel-string tassel-2"></span>
          <span class="tassel-string tassel-3"></span>
          <span class="tassel-string tassel-4"></span>
          <span class="tassel-string tassel-5"></span>
        </div>
      </div>
      <div class="scroll-cap scroll-cap-right">
        <svg viewBox="0 0 30 40" class="scroll-cap-svg">
          <ellipse cx="15" cy="20" rx="12" ry="16" fill="url(#capGrad)" opacity="0.8" />
          <ellipse cx="15" cy="20" rx="8" ry="11" fill="url(#capSealGrad)" opacity="0.7" />
          <ellipse cx="18" cy="16" rx="3" ry="4" fill="var(--seal-red-light)" opacity="0.4" />
        </svg>
        <div class="scroll-tassel">
          <span class="tassel-string tassel-1"></span>
          <span class="tassel-string tassel-2"></span>
          <span class="tassel-string tassel-3"></span>
          <span class="tassel-string tassel-4"></span>
          <span class="tassel-string tassel-5"></span>
        </div>
      </div>
    </div>

    <!-- 卷轴展开遮罩 -->
    <div class="scroll-mask" aria-hidden="true"></div>

    <!-- 鼠标墨迹拖尾容器 -->
    <div class="ink-trail-container" ref="inkTrailRef" aria-hidden="true"></div>

    <!-- 四角墨渍装饰 -->
    <div class="ink-corner ink-top-left"></div>
    <div class="ink-corner ink-top-right"></div>
    <div class="ink-corner ink-bottom-left"></div>
    <div class="ink-corner ink-bottom-right"></div>

    <!-- 墨迹装饰 -->
    <div class="ink-decoration"></div>
    <!-- 印章装饰 -->
    <div class="seal-decoration">墨</div>

    <!-- 左侧竖排诗词背景装饰 -->
    <div class="poem-decoration poem-left" aria-hidden="true">
      <span>山不在高有仙则名</span>
    </div>

    <!-- 右侧竖排诗词背景装饰 -->
    <div class="poem-decoration poem-right" aria-hidden="true">
      <span>水不在深有龙则灵</span>
    </div>

    <!-- 左下角圆形闲章 -->
    <div class="seal-decoration seal-round">闲</div>

    <!-- 标题下方小印章 -->
    <div class="seal-decoration seal-small">cubeyu</div>

    <!-- 左侧斜靠的剑 -->
    <div class="sword-decoration" aria-hidden="true">
      <svg viewBox="0 0 80 240" class="sword-svg">
        <defs>
          <linearGradient id="swordBladeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color: var(--ink-qing); stop-opacity: 0" />
            <stop offset="10%" style="stop-color: var(--ink-dan); stop-opacity: 0.7" />
            <stop offset="30%" style="stop-color: var(--ink-zhong); stop-opacity: 0.9" />
            <stop offset="50%" style="stop-color: var(--ink-nong); stop-opacity: 1" />
            <stop offset="70%" style="stop-color: var(--ink-zhong); stop-opacity: 0.85" />
            <stop offset="90%" style="stop-color: var(--ink-dan); stop-opacity: 0.5" />
            <stop offset="100%" style="stop-color: var(--ink-qing); stop-opacity: 0" />
          </linearGradient>
          <filter id="swordBlur">
            <feGaussianBlur stdDeviation="0.8" />
          </filter>
          <filter id="swordBlur2">
            <feGaussianBlur stdDeviation="2" />
          </filter>
        </defs>
        <path
          d="M40 8 Q38 40 41 80 Q43 120 39 140"
          stroke="url(#swordBladeGrad)"
          stroke-width="5"
          fill="none"
          stroke-linecap="round"
          filter="url(#swordBlur2)"
          opacity="0.3"
        />
        <path
          d="M40 10 Q39 50 41 100 Q42 125 38 142"
          stroke="url(#swordBladeGrad)"
          stroke-width="3"
          fill="none"
          stroke-linecap="round"
        />
        <path
          d="M40 12 Q40 60 40 110 Q40 130 39 145"
          stroke="var(--ink-jiao)"
          stroke-width="1"
          fill="none"
          stroke-linecap="round"
          opacity="0.6"
          stroke-dasharray="3 8 2 6 1 10"
        />
        <path
          d="M32 145 L48 145"
          stroke="var(--ink-zhong)"
          stroke-width="2.5"
          fill="none"
          stroke-linecap="round"
          opacity="0.7"
        />
        <path
          d="M38 148 Q37 170 39 190"
          stroke="var(--ink-dan)"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          opacity="0.5"
        />
        <path
          d="M39 192 Q37 205 35 215 Q40 210 42 218 Q44 210 40 215"
          stroke="var(--seal-red)"
          stroke-width="1.5"
          fill="none"
          stroke-linecap="round"
          opacity="0.6"
        />
        <circle
          cx="37"
          cy="220"
          r="4"
          fill="var(--seal-red)"
          opacity="0.3"
          filter="url(#swordBlur2)"
        />
      </svg>
    </div>

    <!-- 右侧毛笔 -->
    <div class="brush-decoration" aria-hidden="true">
      <svg viewBox="0 0 80 260" class="brush-svg">
        <defs>
          <linearGradient id="brushHandleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color: var(--ink-qing); stop-opacity: 0" />
            <stop offset="15%" style="stop-color: var(--ink-dan); stop-opacity: 0.6" />
            <stop offset="50%" style="stop-color: var(--ink-zhong); stop-opacity: 0.8" />
            <stop offset="85%" style="stop-color: var(--ink-dan); stop-opacity: 0.5" />
            <stop offset="100%" style="stop-color: var(--ink-qing); stop-opacity: 0" />
          </linearGradient>
          <linearGradient id="brushBristleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color: var(--ink-zhong); stop-opacity: 0.9" />
            <stop offset="30%" style="stop-color: var(--ink-nong); stop-opacity: 1" />
            <stop offset="60%" style="stop-color: var(--ink-zhong); stop-opacity: 0.7" />
            <stop offset="100%" style="stop-color: var(--ink-qing); stop-opacity: 0" />
          </linearGradient>
          <filter id="brushBlur">
            <feGaussianBlur stdDeviation="1" />
          </filter>
          <filter id="brushBlur2">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>
        <path
          d="M40 5 Q41 50 39 100 Q38 120 41 130"
          stroke="url(#brushHandleGrad)"
          stroke-width="6"
          fill="none"
          stroke-linecap="round"
          filter="url(#brushBlur2)"
          opacity="0.25"
        />
        <path
          d="M40 8 Q40 60 39 110 Q39 125 41 132"
          stroke="url(#brushHandleGrad)"
          stroke-width="3.5"
          fill="none"
          stroke-linecap="round"
        />
        <path
          d="M40 10 Q40 70 40 115 Q40 128 40 134"
          stroke="var(--ink-jiao)"
          stroke-width="1"
          fill="none"
          stroke-linecap="round"
          opacity="0.5"
          stroke-dasharray="2 6 1 8 3 5"
        />
        <path
          d="M34 133 L46 133"
          stroke="var(--ink-zhong)"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          opacity="0.6"
        />
        <path
          d="M36 135 Q34 170 32 200"
          stroke="url(#brushBristleGrad)"
          stroke-width="3"
          fill="none"
          stroke-linecap="round"
          opacity="0.7"
        />
        <path
          d="M40 135 Q40 175 38 210"
          stroke="url(#brushBristleGrad)"
          stroke-width="4"
          fill="none"
          stroke-linecap="round"
          opacity="0.85"
        />
        <path
          d="M44 135 Q46 170 48 195"
          stroke="url(#brushBristleGrad)"
          stroke-width="2.5"
          fill="none"
          stroke-linecap="round"
          opacity="0.6"
        />
        <path
          d="M33 150 Q31 180 30 205"
          stroke="var(--ink-dan)"
          stroke-width="1.5"
          fill="none"
          stroke-linecap="round"
          opacity="0.4"
        />
        <path
          d="M47 145 Q49 175 50 190"
          stroke="var(--ink-dan)"
          stroke-width="1.5"
          fill="none"
          stroke-linecap="round"
          opacity="0.4"
        />
        <ellipse
          cx="40"
          cy="180"
          rx="15"
          ry="25"
          fill="var(--ink-zhong)"
          opacity="0.1"
          filter="url(#brushBlur2)"
        />
      </svg>
    </div>

    <!-- 左下角竹叶 -->
    <div class="bamboo-decoration bamboo-left" aria-hidden="true">
      <div class="bamboo-stem"></div>
      <div class="bamboo-leaf leaf-1"></div>
      <div class="bamboo-leaf leaf-2"></div>
      <div class="bamboo-leaf leaf-3"></div>
    </div>

    <!-- 右下角梅花 -->
    <div class="plum-decoration plum-right" aria-hidden="true">
      <div class="plum-branch branch-1"></div>
      <div class="plum-branch branch-2"></div>
      <div class="plum-flower flower-1"></div>
      <div class="plum-flower flower-2"></div>
      <div class="plum-flower flower-3"></div>
    </div>

    <!-- 右侧竖排题跋 -->
    <div class="vertical-calligraphy" aria-hidden="true">
      <span class="calligraphy-text">水墨小筑</span>
      <span class="calligraphy-seal">墨</span>
    </div>

    <!-- 头部区域 -->
    <Header />

    <!-- 自我介绍（移至分割线上方，作为引导语） -->
    <div class="self-intro" aria-label="自我介绍">
      <div class="self-intro-text">
        <p>你好，很高兴认识你</p>
        <p>
          我叫
          <b>{{ config.name }}</b>
          （<template v-if="config.age && config.age !== 'Null'">{{ config.age }}岁的 </template
          ><b class="zodiac">{{ config.zodiac }}</b
          >）
        </p>
        <p>
          爱好是
          <span v-for="(i, index) in config.professions" :key="index">
            <b>{{ i }}</b>
            <span v-if="index < config.professions.length - 1">、</span>
          </span>
        </p>
      </div>

      <div class="programmer-decoration" aria-hidden="true" title="程序员">
        <svg viewBox="0 0 100 100" class="programmer-svg" preserveAspectRatio="xMidYMid meet">
          <defs>
            <radialGradient id="programmerInk" cx="35%" cy="30%" r="65%">
              <stop offset="0%" style="stop-color: var(--ink-nong); stop-opacity: 0.95" />
              <stop offset="55%" style="stop-color: var(--ink-zhong); stop-opacity: 0.7" />
              <stop offset="100%" style="stop-color: var(--ink-qing); stop-opacity: 0.25" />
            </radialGradient>
            <filter id="programmerBlur">
              <feGaussianBlur stdDeviation="0.6" />
            </filter>
          </defs>

          <!-- 背景淡墨晕 -->
          <ellipse
            class="programmer-ink-splash"
            cx="50"
            cy="48"
            rx="38"
            ry="32"
            fill="url(#programmerInk)"
            opacity="0.15"
            filter="url(#programmerBlur)"
          />

          <!-- 案几 -->
          <path
            d="M10 83 Q50 87 90 83"
            stroke="var(--ink-zhong)"
            stroke-width="2.5"
            stroke-linecap="round"
            fill="none"
            opacity="0.75"
          />

          <!-- 笔记本电脑 -->
          <path
            d="M34 83 L44 69 L44 56 Q44 51 50 51 Q56 51 56 56 L56 69 L66 83"
            stroke="var(--ink-nong)"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <g class="programmer-screen-code">
            <path d="M47 62 L53 62" stroke="var(--ink-zhong)" stroke-width="1.4" stroke-linecap="round" opacity="0.5" />
            <path d="M47 67 L52 67" stroke="var(--ink-zhong)" stroke-width="1.4" stroke-linecap="round" opacity="0.5" />
          </g>

          <!-- 人物 -->
          <circle cx="50" cy="28" r="8.5" fill="var(--ink-nong)" opacity="0.75" />
          <path
            d="M50 37 C42 46 36 54 38 70 L62 70 C64 54 58 46 50 37"
            fill="var(--ink-zhong)"
            opacity="0.6"
          />
          <path d="M39 53 Q48 60 52 58" stroke="var(--ink-nong)" stroke-width="1.8" stroke-linecap="round" fill="none" opacity="0.8" />
          <path d="M61 53 Q52 60 48 58" stroke="var(--ink-nong)" stroke-width="1.8" stroke-linecap="round" fill="none" opacity="0.8" />

          <!-- 漂浮代码符号 </> -->
          <g class="programmer-code-symbols" stroke="var(--ink-zhong)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" opacity="0.55">
            <path d="M74 32 L70 36 L74 40" />
            <path d="M82 40 L86 36 L82 32" />
          </g>

          <!-- 茶盏 -->
          <path
            d="M16 74 L16 70 Q16 68 18 68 L24 68 Q26 68 26 70 L26 74 Q26 78 21 78 Q16 78 16 74"
            stroke="var(--ink-zhong)"
            stroke-width="1.5"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            opacity="0.6"
          />
        </svg>
      </div>
    </div>

    <!-- 水墨笔触分割线 -->
    <div class="ink-divider" aria-hidden="true">
      <svg viewBox="0 0 800 20" class="ink-divider-svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="inkDividerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color: var(--ink-qing); stop-opacity: 0" />
            <stop offset="15%" style="stop-color: var(--ink-dan); stop-opacity: 0.3" />
            <stop offset="40%" style="stop-color: var(--ink-zhong); stop-opacity: 0.5" />
            <stop offset="50%" style="stop-color: var(--ink-nong); stop-opacity: 0.6" />
            <stop offset="60%" style="stop-color: var(--ink-zhong); stop-opacity: 0.5" />
            <stop offset="85%" style="stop-color: var(--ink-dan); stop-opacity: 0.3" />
            <stop offset="100%" style="stop-color: var(--ink-qing); stop-opacity: 0" />
          </linearGradient>
          <filter id="inkDividerBlur">
            <feGaussianBlur stdDeviation="0.8" />
          </filter>
        </defs>
        <path
          d="M120 10 Q200 8 400 10 Q600 12 680 10"
          stroke="url(#inkDividerGrad)"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          filter="url(#inkDividerBlur)"
          opacity="0.7"
        />
        <path
          d="M150 11 Q250 9 350 11 Q450 13 550 11 Q620 9 650 11"
          stroke="url(#inkDividerGrad)"
          stroke-width="0.8"
          fill="none"
          stroke-linecap="round"
          opacity="0.4"
          stroke-dasharray="8 4 2 6 3 5"
        />
        <circle
          cx="400"
          cy="10"
          r="1.5"
          fill="var(--ink-zhong)"
          opacity="0.3"
          filter="url(#inkDividerBlur)"
        />
      </svg>
    </div>

    <!-- 内容区域 -->
    <div class="content">
      <!-- 第一行：时光（左） + 外物（右）对齐 -->
      <div class="content-row">
        <div class="leftBox">
          <TimeProgress />
        </div>

        <div class="rightBox">
          <TechStack />
        </div>
      </div>

      <div class="typew card">
        <Icon icon="carbon:quotes" width="16" height="16" aria-hidden="true" />
        <Typewriter :text="typewriter" />
        <Icon icon="ph:quotes-fill" width="16" height="16" aria-hidden="true" />
      </div>

      <!-- 第二行：待办（左） + 纵览（右） -->
      <div class="content-row">
        <div class="leftBox">
          <TodoList />
        </div>

        <div class="rightBox">
          <div class="card">
            <span class="cardHeader">纵览</span>
            <nav class="linkBox" aria-label="社交链接">
              <link-btn
                v-for="(i, index) in linkBtns.linkBtn.slice(0, 12)"
                :key="index"
                :icon="i.icon"
                :text="i.text"
                :color="i.color"
                :url="i.url"
              ></link-btn>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <footer class="footer">
      <div class="footer-content">
        <span class="footer-seal">墨</span>
        <p class="footer-text">©{{ new Date().getFullYear() }} cubeyu · 水墨小筑</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import config from '../config/config.json'
import linkBtns from '../config/linkBtn.json'
import typewriter from '../config/typewriter.json'
import { Icon } from '@iconify/vue'
import LinkBtn from '../components/LinkBtn.vue'
import Typewriter from '../components/Typewriter.vue'
import Header from '../components/Header.vue'
import TodoList from '../components/TodoList.vue'
import TechStack from '../components/TechStack.vue'
import TimeProgress from '../components/TimeProgress.vue'
import { ref, onMounted, onUnmounted } from 'vue'

const inkTrailRef = ref(null)
let lastInkTime = 0
const INK_INTERVAL = 80
const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const createInkDot = (x, y) => {
  if (!inkTrailRef.value) return

  const dot = document.createElement('div')
  dot.className = 'ink-dot'

  const size = 6 + Math.random() * 10
  dot.style.width = size + 'px'
  dot.style.height = size + 'px'
  dot.style.left = x - size / 2 + 'px'
  dot.style.top = y - size / 2 + 'px'

  dot.style.opacity = 0.15 + Math.random() * 0.2

  inkTrailRef.value.appendChild(dot)

  setTimeout(() => {
    if (dot.parentNode) {
      dot.parentNode.removeChild(dot)
    }
  }, 1500)
}

const handleMouseMove = (e) => {
  if (prefersReducedMotion) return
  const now = Date.now()
  if (now - lastInkTime < INK_INTERVAL) return
  lastInkTime = now

  if (!inkTrailRef.value) return

  const rect = inkTrailRef.value.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

  createInkDot(x, y)
}

onMounted(() => {
  if (inkTrailRef.value) {
    inkTrailRef.value.addEventListener('mousemove', handleMouseMove)
  }
})

onUnmounted(() => {
  if (inkTrailRef.value) {
    inkTrailRef.value.removeEventListener('mousemove', handleMouseMove)
  }
})
</script>
