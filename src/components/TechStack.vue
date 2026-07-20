<template>
  <div class="card techStackCard">
    <h3>百工</h3>
    <div class="techStack">
      <div
        v-for="(i, index) in techStack.techStack"
        :key="index"
        class="techItem"
        :data-name="i.name"
      >
        <img
          v-if="!failed.has(index)"
          :src="iconUrl(i.icon)"
          :alt="i.name"
          class="skill-icon"
          width="36"
          height="36"
          loading="lazy"
          @error="markFailed(index)"
        />
        <span v-else class="techFallback">{{ abbr(i.name) }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import techStack from '../config/techStack.json'

const failed = reactive(new Set())

function iconUrl(slug) {
  // 本地静态 SVG，避免无 VPN 时 skillicons.dev 无法加载
  return `/icons/tech/${slug}.svg`
}

function markFailed(index) {
  failed.add(index)
}

function abbr(name) {
  //  fallback 显示简短缩写，防止长名在小方格内溢出
  return name.length <= 5 ? name : name.slice(0, 4)
}
</script>
