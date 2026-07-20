import { ref, readonly, onMounted } from 'vue'

const theme = ref(localStorage.getItem('theme') || 'light')

export function useTheme() {
  const initTheme = () => {
    document.documentElement.setAttribute('theme', theme.value)
  }

  const changeTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', theme.value)
    initTheme()
  }

  onMounted(() => {
    initTheme()
  })

  return {
    theme: readonly(theme),
    changeTheme,
    initTheme
  }
}
