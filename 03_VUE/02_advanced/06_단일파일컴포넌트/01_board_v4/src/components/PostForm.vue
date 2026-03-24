<template>
  <div class="container">
    <input type="text" placeholder="새 게시글 제목" v-model.trim="newTitle" />
    <input type="text" placeholder="새 게시글 내용" v-model.trim="newContent" />
    <button @click="handleAdd">작성</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['add-post']);

const newTitle = ref('');
const newContent = ref('');

const handleAdd = () => {
  if (!newTitle.value || !newContent.value) return;

  emit('add-post', {
    title: newTitle.value,
    content: newContent.value,
  });

  newTitle.value = '';
  newContent.value = '';
};
</script>

<style lang="scss" scoped></style>
