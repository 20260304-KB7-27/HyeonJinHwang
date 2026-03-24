<template>
  <li @click="toggleCompleted(todoitem.id)">
    <span
      :style="{ textDecoration: todoitem.completed ? 'line-through' : 'none' }"
      >{{ todoitem.todo }} {{ todoitem.completed ? '[완료]' : '' }}</span
    >
    <!-- 삭제 하기 -->
    <button @click="deleteTodo(todoitem.id)">삭제</button>
  </li>
</template>

<script setup>
const props = defineProps({
  todoitem: Object,
});

// 이벤트 전달하기 위해 emit 사용
const emit = defineEmits(['toggle', 'delete']);

const toggleCompleted = (id) => {
  emit('toggle', id);
};

const deleteTodo = (id) => {
  emit('delete', id);
};
</script>

<style lang="scss" scoped></style>
