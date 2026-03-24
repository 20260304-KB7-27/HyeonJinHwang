<template>
  <div>
    <input
      type="text"
      v-model.trim="todo"
      @keyup.ente.exact="addTodo"
      @keyup.ctrl.enter.exact="addTodo"
    />
    <button @click="addTodo">추가</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const todo = ref('');

const addTodo = (e) => {
  if (todo === '') return;

  emit('add', {
    id: new Date().getTime(),
    todo: todo.value,
    completed: e.ctrlKey ? true : false,
  });

  todo.value = '';
};

const emit = defineEmits(['add']);
</script>

<style lang="scss" scoped></style>
