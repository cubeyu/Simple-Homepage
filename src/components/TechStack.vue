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
          @error="failed.add(index)"
        />
        <span v-else class="techFallback">{{ i.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import techStack from '../config/techStack.json'

const failed = reactive(new Set())

function iconUrl(slug) {
  return `https://skillicons.dev/icons?i=${slug}`
}
</script>
