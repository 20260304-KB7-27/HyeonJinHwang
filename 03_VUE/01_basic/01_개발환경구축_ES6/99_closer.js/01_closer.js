/*
  클로저
    : 반환된 내부함수가 자신이 선언됐을 때의 환경인 스코프를 기억하여,
      자신이 선언되었을 때의 환경 밖에서도 스코프에 접근 할 수 있는 함수.
 */

function outer() {
  let count = 0;

  function inner() {
    count++; // outer함수의 지역변수

    console.log(count);
  }

  // () 안썼으니까 호출하는게 아니라 함수 자체를 반환하는 거임
  return inner;
}

// 반환한 함수를 호출하도록 ()를 하나더 적어준다.
outer()(); // 1
outer()(); // 1
outer()(); // 1
// 결과가 다 1인걸 보니 기억을 못하는 거 같음
// 근데 나는 그 값을 유지시키고 싶어! -> 이 때 클로저 사용

const counter = outer(); // 반환받은 inner()

counter(); // 1
counter(); // 2
counter(); // 3
