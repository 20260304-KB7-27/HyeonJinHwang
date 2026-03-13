const path = require('path');
// import path from 'path'; // esm
// import { fileURLToPath } from 'url';

// __filename -> esm 방식에서 사용불가
// 현재 파일의 절대 경로가 뜬다.
// const dir = fileURLToPath(import.meta.url);
// console.log(dir);

console.log(`파일 절대 경로 : ${__filename}`);

/*
  - 절대경로: 루트 디렉토리부터 시작하는 경로
  - 상대경로: 현재 작업 디렉토리 기준 경로
 */

const dir = path.dirname(__filename);
console.log(`폴더까지만: ${dir}`);
console.log('------------------------')

// 현재 작업 디렉토리
console.log(process.cwd);
