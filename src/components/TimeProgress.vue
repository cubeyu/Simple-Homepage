<template>
  <div class="card">
    <div class="time-progress">
      <h3>光阴</h3>
      <div class="progress-item">
        <p class="progress-day">今日已经过去了 {{ hoursPassed }} / 24 小时</p>
        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: hoursProgress + '%' }"></div>
        </div>
      </div>

      <div class="progress-item">
        <p class="progress-week">本周已经过去了 {{ daysInWeekPassed }} / 7 天</p>
        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: weekProgress + '%' }"></div>
        </div>
      </div>

      <div class="progress-item">
        <p class="progress-month">
          本月已经过去了 {{ daysInMonthPassed }} / {{ daysInCurrentMonth }} 天
        </p>
        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: monthProgress + '%' }"></div>
        </div>
      </div>

      <div class="progress-item">
        <p class="progress-year">
          今年已经过去了 {{ daysInYearPassed }} / {{ daysInCurrentYear }} 天
        </p>
        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: yearProgress + '%' }"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const now = ref(new Date())

const hoursPassed = computed(() => now.value.getHours())
const hoursProgress = computed(() => ((hoursPassed.value / 24) * 100).toFixed(2))

const daysInWeekPassed = computed(() => {
  const day = now.value.getDay()
  return day === 0 ? 7 : day
})
const weekProgress = computed(() => ((daysInWeekPassed.value / 7) * 100).toFixed(2))

const daysInMonthPassed = computed(() => now.value.getDate())
const daysInCurrentMonth = computed(() =>
  new Date(now.value.getFullYear(), now.value.getMonth() + 1, 0).getDate()
)
const monthProgress = computed(() => (daysInMonthPassed.value / daysInCurrentMonth.value) * 100)

const daysInYearPassed = computed(() => {
  const startOfYear = new Date(now.value.getFullYear(), 0, 1)
  const diff = now.value - startOfYear
  return Math.ceil(diff / (1000 * 60 * 60 * 24))
})

const daysInCurrentYear = computed(() => {
  const isLeap = isLeapYear(now.value.getFullYear())
  return isLeap ? 366 : 365
})

const yearProgress = computed(() => (daysInYearPassed.value / daysInCurrentYear.value) * 100)

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}

let timeIntervalId = null

onMounted(() => {
  timeIntervalId = setInterval(() => {
    now.value = new Date()
  }, 60000)
})

onUnmounted(() => {
  if (timeIntervalId) {
    clearInterval(timeIntervalId)
  }
})
</script>
