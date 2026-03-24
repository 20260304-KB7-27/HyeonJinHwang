<template>
  <div class="post-content" v-if="!isModifyMode">
    <h2>{{ post.title }}</h2>
    <p>{{ post.content }}</p>

    <div class="btnContainer">
      <button @click="handleChangeModifyMode">수정</button>
      <button @click="handleDeletePost">삭제</button>
      <button @click="handleClosePost">닫기</button>
    </div>
  </div>

  <div class="post-content" v-else>
    <input type="text" v-model.trim="editTitle" />
    <textarea v-model.trim="editContent"></textarea>

    <div class="btnContainer">
      <button @click="handleSave">저장</button>
      <button @click="handleChangeModifyMode">취소</button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  post: Object,
  isModifyMode: Boolean,
});

const emit = defineEmits([
  'close-post',
  'delete-post',
  'change-modify-mode',
  'save-changes',
]);

const handleClosePost = () => {
  emit('close-post');
};

const handleDeletePost = () => {
  emit('delete-post');
};

const handleChangeModifyMode = () => {
  emit('change-modify-mode');
};

const editTitle = ref('');
const editContent = ref('');

watch(
  () => [props.post, props.isModifyMode],
  () => {
    if (props.post && props.isModifyMode) {
      editTitle.value = props.post.title;
      editContent.value = props.post.content;
    }
  },
  { immediate: true },
);

const handleSave = () => {
  if (!editTitle.value || !editContent.value) return;

  emit('save-changes', {
    title: editTitle.value,
    content: editContent.value,
  });
};
</script>

<style lang="scss" scoped></style>
