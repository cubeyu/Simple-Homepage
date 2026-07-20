<template>
  <header class="header">
    <div class="avatar" @mouseenter="avatarHovered = true" @mouseleave="avatarHovered = false">
      <img
        :src="avatarSrc"
        alt="头像"
        :class="{ 'avatar-zoom': avatarHovered }"
        @error="handleAvatarError"
      />
    </div>

    <button
      class="theme-toggle"
      type="button"
      @click="changeTheme"
      :aria-label="theme === 'light' ? '切换到夜间模式' : '切换到日间模式'"
      :aria-pressed="theme === 'dark'"
    >
      <span class="toggle-container">
        <span v-if="theme === 'light'">月</span>
        <span v-else>日</span>
      </span>
    </button>

    <div class="sayHi">
      <h1 data-text="Hi, I'm">
        Hi, I'm
        <span class="name" :data-text="config.name">
          {{ config.name }}
        </span>
      </h1>

      <div class="infoTags">
        <div v-if="config.infoTags.sex === '男'" class="tag hover">
          <Icon icon="ep:user" width="16" height="16" class="tag-icon" aria-hidden="true" />
          <span class="boy"> ♂ </span>
        </div>
        <div v-else-if="config.infoTags.sex === '女'" class="tag hover">
          <Icon icon="ep:user" width="16" height="16" class="tag-icon" aria-hidden="true" />
          <span class="girl"> ♀ </span>
        </div>
        <div v-else class="tag hover">
          <Icon icon="ep:user" width="16" height="16" class="tag-icon" aria-hidden="true" />
          {{ config.infoTags.sex }}
        </div>
        <div class="tag hover">
          <Icon icon="ep:location" width="16" height="16" class="tag-icon" aria-hidden="true" />
          {{ config.infoTags.province }}
        </div>
        <div class="tag hover">
          <Icon icon="ep:school" width="16" height="16" class="tag-icon" aria-hidden="true" />
          {{ config.infoTags.company }}
        </div>
        <div class="tag hover">
          <Icon icon="ep:chat-square" width="16" height="16" class="tag-icon" aria-hidden="true" />
          {{ config.infoTags.github }}
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import config from '../config/config.json'
import { Icon } from '@iconify/vue'
import { ref, inject } from 'vue'

const theme = inject('theme')
const changeTheme = inject('changeTheme')

const avatarHovered = ref(false)
const avatarSrc = ref(config.avatarUrl)

const handleAvatarError = () => {
  avatarSrc.value = '/favicon.ico'
}
</script>

<style>
.header {
  position: relative;
}

.theme-toggle {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  width: 36px;
  height: 36px;
  transition: all 0.3s ease;
  border: 1px solid var(--card-border-color);
  border-radius: 1px;
  background: transparent;
  color: var(--ink-dan);
  font-family: var(--font-family);
}

.theme-toggle:hover {
  color: var(--seal-red);
  border-color: var(--seal-red);
}

.theme-toggle:focus-visible {
  outline: 2px solid var(--seal-red);
  outline-offset: 2px;
  color: var(--seal-red);
  border-color: var(--seal-red);
}

.toggle-container {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  line-height: 1;
}

@media (max-width: 768px) {
  .theme-toggle {
    top: 8px;
    right: 8px;
  }
}
</style>
