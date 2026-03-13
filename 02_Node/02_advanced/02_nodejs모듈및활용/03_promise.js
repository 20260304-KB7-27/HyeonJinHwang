// 파일시스템의 프로미스에 해당되는 것들만 가져오겠다는 뜻
const fs = require('fs').promises;
// const fs = require('fs/promises');

fs.readdir('./')
  .then((files) => {
    console.log(files);
  })
  .catch((err) => {
    console.err(err);
  });
