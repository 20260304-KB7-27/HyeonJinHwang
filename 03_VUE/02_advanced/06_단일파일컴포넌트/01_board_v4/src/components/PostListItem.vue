<template>
  <li>
    <div class="post-item" @click="$emit('select-post', post)">
      <div>{{ post.no }}. {{ post.title }}</div>
      <div class="arrow">
        {{ selectedNo === post.no && isOpen ? '▲' : '▼' }}
      </div>
    </div>

    <PostDetail
      v-if="selectedNo === post.no && isOpen"
      :post="result"
      :is-modify-mode="isModifyMode"
      @close-post="handleClosePost"
      @delete-post="handleDeletePost"
      @change-modify-mode="handleChangeModifyMode"
      @save-changes="handleSaveChanges"
    />
  </li>
</template>

<script setup>
import PostDetail from './PostDetail.vue';

const props = defineProps({
  post: Object,
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

const handleSelectPost = () => {
  emit('select-post', props.post);
};

const handleClosePost = () => {
  emit('close-post');
};

const handleDeletePost = () => {
  emit('delete-post', props.post.no);
};

const handleChangeModifyMode = () => {
  emit('change-modify-mode');
};

const handleSaveChanges = (payload) => {
  emit('save-changes', payload);
};
</script>

<style lang="scss" scoped></style>
