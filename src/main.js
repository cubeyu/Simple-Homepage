import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './assets/fonts/font.css'
import './assets/css/MainCard.css'
import { inject } from '@vercel/analytics'

inject()

createApp(App).mount('#app')
