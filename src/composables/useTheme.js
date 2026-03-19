import { ref, readonly, onMounted } from 'vue';

const theme = ref(localStorage.getItem('theme') || 'light');

export function useTheme() {
  const initTheme = () => {
    if (theme.value === 'dark') {
      document.documentElement.classList.add('dark-theme');
      document.body.setAttribute('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark-theme');
      document.body.setAttribute('theme', 'light');
    }
  };

  const changeTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', theme.value);
    initTheme();
  };

  onMounted(() => {
    initTheme();
  });

  return {
    theme: readonly(theme),
    changeTheme,
    initTheme
  };
}
