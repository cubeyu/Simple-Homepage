<template>
  <div class="typewriter">
    <template v-for="(char, index) in displayedChars" :key="index">
      <span
        class="typewriter-char"
        :style="{
          opacity: index <= animatedIndex ? 1 : 0
        }"
      >
        {{ char }}
      </span>
      <!-- 只有当当前字符是最后一个显示的字符时，才显示光标 -->
      <span
        v-if="index === animatedIndex"
        class="cursor"
        :class="{ blink: showCursor, pulse: isComplete }"
        >|</span
      >
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'

const props = defineProps({
  text: {
    type: [String, Array],
    default: () => []
  },
  typingSpeed: {
    type: Number,
    default: 150 // 打字速度
  },
  deletingSpeed: {
    type: Number,
    default: 100 // 删除速度
  },
  delayAfterTyping: {
    type: Number,
    default: 1000 // 打字完成后的延迟
  },
  delayAfterDeleting: {
    type: Number,
    default: 500 // 删除完成后的延迟
  },
  loop: {
    type: Boolean,
    default: true
  },
  randomSpeed: {
    type: Boolean,
    default: true
  }
})

const displayedChars = ref([])
const animatedIndex = ref(-1)
const showCursor = ref(true)
const currentTextIndex = ref(0)
const isDeleting = ref(false)
const isComplete = ref(false)
let timeoutId = null
let intervalId = null

const getCurrentText = () => {
  if (Array.isArray(props.text)) {
    return props.text[currentTextIndex.value] || ''
  }
  return props.text || ''
}

const getTextArrayLength = () => {
  if (Array.isArray(props.text)) {
    return props.text.length
  }
  return 0
}

// 计算随机速度，增加打字的真实感
const getRandomSpeed = (baseSpeed) => {
  if (!props.randomSpeed) return baseSpeed

  // 基础速度加上随机变化
  const variation = baseSpeed * 0.3 // 30%的速度变化
  return baseSpeed + (Math.random() * variation - variation / 2)
}

const resetForNewText = () => {
  displayedChars.value = []
  animatedIndex.value = -1
  isDeleting.value = false
  isComplete.value = false
}

const typeText = () => {
  const textToType = getCurrentText()

  // 初始化字符数组
  if (displayedChars.value.length === 0) {
    displayedChars.value = textToType.split('')
  }

  if (!isDeleting.value) {
    if (animatedIndex.value < displayedChars.value.length - 1) {
      animatedIndex.value++

      // 根据字符调整速度（标点符号稍作停顿）
      const currentChar = displayedChars.value[animatedIndex.value]
      let charSpeed = getRandomSpeed(props.typingSpeed)

      // 为标点符号添加更长的暂停
      if (
        ['.', ',', '!', '?', ';', ':', '，', '。', '！', '？', '；', '：'].includes(currentChar)
      ) {
        charSpeed *= 2
      }
      // 为空格添加稍短的暂停
      else if (currentChar === ' ') {
        charSpeed *= 0.8
      }

      timeoutId = setTimeout(typeText, charSpeed)
    } else {
      isComplete.value = true

      if (props.loop || currentTextIndex.value < getTextArrayLength() - 1) {
        timeoutId = setTimeout(() => {
          isDeleting.value = true
          isComplete.value = false
          typeText()
        }, props.delayAfterTyping)
      }
    }
  } else {
    if (animatedIndex.value >= 0) {
      animatedIndex.value--
      timeoutId = setTimeout(typeText, getRandomSpeed(props.deletingSpeed))
    } else {
      isDeleting.value = false
      if (props.loop || currentTextIndex.value < getTextArrayLength() - 1) {
        if (Array.isArray(props.text) && props.text.length > 0) {
          currentTextIndex.value = (currentTextIndex.value + 1) % props.text.length
        }

        if (props.loop || currentTextIndex.value < getTextArrayLength()) {
          resetForNewText()
          timeoutId = setTimeout(typeText, props.delayAfterDeleting)
        }
      }
    }
  }
}

// 监听文本变化，重新开始
watch(
  () => props.text,
  () => {
    if (timeoutId) clearTimeout(timeoutId)
    resetForNewText()
    setTimeout(() => {
      typeText()
    }, 300)
  },
  { deep: true }
)

onMounted(() => {
  // 稍微延迟开始，让页面加载更自然
  setTimeout(() => {
    typeText()
  }, 300)

  intervalId = setInterval(() => {
    showCursor.value = !showCursor.value
  }, 500)
})

onUnmounted(() => {
  if (timeoutId) clearTimeout(timeoutId)
  if (intervalId) clearInterval(intervalId)
})
</script>

<style scoped>
.typewriter {
  font-family: monospace;
  white-space: pre-wrap;
  overflow: hidden;
  text-align: center;
  font-size: 18px;
  line-height: 1.2;
  display: inline-block;
}

.typewriter-char {
  display: inline-block;
  transition: opacity 0.1s ease;
  opacity: 0;
}

.cursor {
  display: inline-block;
  width: 2px;
  height: 1.2em;
  margin-left: 2px;
  background-color: currentColor;
  vertical-align: text-bottom;
  border-radius: 1px;
  transition: all 0.3s ease;
  font-weight: bolder;
  opacity: 1;
}

.cursor.blink {
  animation: blink 1s infinite steps(1, end);
}

@keyframes blink {
  0%,
  49% {
    opacity: 1;
  }
  50%,
  100% {
    opacity: 0;
  }
}

.cursor.pulse {
  animation: pulse 2s infinite ease-in-out;
  opacity: 0.7;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.7;
    transform: scaleX(1);
  }
  50% {
    opacity: 1;
    transform: scaleX(1.2);
  }
}

/* 响应式调整 */
@media (max-width: 768px) {
  .typewriter {
    font-size: 16px;
  }

  .cursor {
    width: 1.5px;
    margin-left: 1px;
  }
}
</style>
