const order = (bevarage, callback) => {
  console.log(bevarage, ' 주문 접수');
  setTimeout(() => {
    callback(bevarage);
  }, 3000);
};

const display = (result) => {
  console.log(`${result} 완료!`);
};

order('아메리카노', display);
