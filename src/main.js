import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './assets/fonts/font.css'
import './assets/css/MainCard.css'
import { inject } from '@vercel/analytics'

const app = createApp(App)

// 防御性：任何渲染期/生命周期错误都记录到控制台，避免静默白屏（便于排查）
app.config.errorHandler = (err, instance, info) => {
  console.error('[水墨小筑] 渲染错误：', err, info)
}
app.config.warnHandler = (msg, instance, trace) => {
  // 过滤掉无关紧要的脚手架告警，保留真正有用的信息
  if (String(msg).includes('[Vue warn]')) return
  console.warn('[水墨小筑] 警告：', msg, trace)
}

// Vercel Analytics 初始化失败时不应阻断整页（本地/离线环境常见）
try {
  inject()
} catch (e) {
  console.warn('[水墨小筑] Vercel Analytics 初始化跳过：', e)
}

app.mount('#app')
