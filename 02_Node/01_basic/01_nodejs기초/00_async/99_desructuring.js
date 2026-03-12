// 구조분해할당
//  - 배열이나 객체에 들어있는 값을 더 짧고 편하게
//  - 원하는 변수에 나누어 담는 문법

// 배열 구조분해할당
const fruits = ['apple', 'banana', 'orange'];

// ,를 사용해서 비워두면 넘어가서 다음 요소를 가져올 수 있다.
const [a, , b] = fruits;

console.log(a);
console.log(b);
// console.log(c);

// 객체
const student = {
  name: '황현진',
  age: 26,
  major: '컴공',
};

// 객체를 구조분해 할당할 때는 key값이 중요함 (위의 사례처럼 a, b, c로 호출할 수 없음)
// 원하는 변수명으로 받고 싶을 경우 -> { 기존 key: 새로운 변수명 }
const { name: student_name, age, major } = student;

// console.log(student_name);
// console.log(age);
// console.log(major);

const person = {
  username: 'hwang',
  city: 'Seoul',
};

function printUser({ username, city }) {
  console.log('사용자 이름: ', username);
  console.log('사용자 도시', city);
}

printUser(person);
