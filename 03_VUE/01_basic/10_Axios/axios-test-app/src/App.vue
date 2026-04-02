<template>
  <div>
    <button @click="requestAxios">axios 버튼</button>
    <br />
    <br />
    <button @click="requestFetch">fetch 버튼</button>
  </div>
</template>

<script setup>
import axios from 'axios';

const url = 'http://localhost:3000/todos';

// axios.get()은 비동기함수이기 때문에 결과를 바로 반환하지 않고 Promise 객체를 반환
// const response = axios.get(url);
// console.log(response);

const requestAxios = () => {
  axios.get(url).then((response) => {
    console.log('[axios] 응답객체', response);
    console.log('[axios] 응답객체', response.data);
  });
};
</script>

<style scoped></style>
