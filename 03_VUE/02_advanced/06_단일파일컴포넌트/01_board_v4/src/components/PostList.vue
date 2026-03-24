<template>
  <ul>
    <PostListItem
      v-for="post in posts"
      :key="post.no"
      :post="post"
      :selected-no="selectedNo"
      :is-open="isOpen"
      :is-modify-mode="isModifyMode"
      :result="result"
      @select-post="handleSelectPost"
      @close-post="handleClosePost"
      @delete-post="handleDeletePost"
      @change-modify-mode="handleChangeModifyMode"
      @save-changes="handleSaveChanges"
    />
  </ul>
</template>

<script setup>
import PostListItem from './PostListItem.vue';

const props = defineProps({
  posts: Array,
  selectedNo: Number,
  isOpen: Boolean,
  isModifyMode: Boolean,
  result: Object,
});

const emit = defineEmits([
  'select-post',
  'close-post',
  'delete-post',
  'change-modify-mode',
  'save-changes',
]);

const handleSelectPost = (post) => {
  emit('select-post', post);
};

const handleClosePost = () => {
  emit('close-post');
};

const handleDeletePost = (no) => {
  emit('delete-post', no);
};

const handleChangeModifyMode = () => {
  emit('change-modify-mode');
};

const handleSaveChanges = (payload) => {
  emit('save-changes', payload);
};
</script>

<style lang="scss" scoped></style>
