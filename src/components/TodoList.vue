<template>
  <div class="card">
    <span class="cardHeader">计划</span>
    <div class="cardMain">
      <div class="todoList">
        <div class="todoItem" v-for="(i, index) in todo.todoList" :key="index">
          <Icon
            :icon="i.checked ? 'lets-icons:check-ring' : 'gg:radio-check'"
            width="24"
            height="24"
            aria-hidden="true"
          />
          <span v-if="i.checked">
            <del>{{ i.text }}</del>
          </span>
          <span v-else>
            {{ i.text }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import todo from '../config/todo.json'
import { Icon } from '@iconify/vue'
</script>
