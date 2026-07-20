<template>
  <a
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
    class="linkBtn"
    :style="{ '--btn-color': color }"
  >
    <span class="link-icon-wrapper">
      <Icon :icon="icon" class="link-icon" aria-hidden="true" />
    </span>
    <span v-if="text">{{ text }}</span>
  </a>
</template>

<script setup>
import { Icon } from '@iconify/vue'

const props = defineProps({
  icon: {
    type: String,
    default: ''
  },
  text: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: '#9c2c2c'
  },
  url: {
    type: String,
    default: '#'
  }
})
</script>

<style scoped>
.linkBtn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: normal;
  height: 38px;
  padding: 0 1rem;
  margin: 0;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  color: var(--ink-dan);
  transition: all 0.3s ease;
  border: 1px solid var(--card-border-color);
  border-radius: 1px;
  background: var(--square-background);
  text-decoration: none;
  position: relative;
  letter-spacing: 1px;
  font-family: var(--font-family);
}

.linkBtn span {
  margin-left: 0.5rem;
  transition: all 0.3s ease;
}

.link-icon-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.linkBtn .link-icon {
  width: 100%;
  height: 100%;
  color: var(--btn-color, var(--ink-dan));
}

.linkBtn:hover {
  color: var(--btn-color, var(--seal-red));
  border-color: var(--btn-color, var(--seal-red));
  background: rgba(156, 44, 44, 0.05);
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(156, 44, 44, 0.1);
}

.linkBtn:hover .link-icon-wrapper {
  transform: scale(1.08);
}

.linkBtn:hover .link-icon {
  color: var(--btn-color, var(--seal-red));
}

.linkBtn:active {
  transform: translateY(0) scale(0.98);
  background: rgba(156, 44, 44, 0.1);
}

.linkBtn:focus-visible {
  outline: 2px solid var(--seal-red);
  outline-offset: 2px;
  color: var(--btn-color, var(--seal-red));
  border-color: var(--btn-color, var(--seal-red));
}

@media (min-width: 769px) {
  .linkBtn {
    height: 42px;
    padding: 0 1.2rem;
    font-size: 15px;
  }
  .link-icon-wrapper {
    width: 20px;
    height: 20px;
  }
}

@media (min-width: 1200px) {
  .linkBtn {
    height: 44px;
    padding: 0 1.4rem;
    font-size: 15px;
  }
  .link-icon-wrapper {
    width: 22px;
    height: 22px;
  }
}
</style>
