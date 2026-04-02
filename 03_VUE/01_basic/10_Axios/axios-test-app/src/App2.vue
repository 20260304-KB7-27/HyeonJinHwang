<template>
  <div>
    <button @click="requestAxios">axios 버튼</button>
  </div>
</template>

<script setup>
import axios from 'axios';

const url = '/api/todos';

const data = {
  todo: 'w잠깨기',
  desc: 'd얼른..',
};

// const requestAxios = () => {
//   axios.post(url, data).then((response) => {
//     console.log('[axios] 응답객체', response);
//     console.log('[axios] 응답객체', response.data);
//   });
// };

const requestAxios = async () => {
  const response = await axios.post((url, post));
  console.log('응답데이터: ', response);
};
</script>

<style scoped></style>
