/* const path = require('path');

const string = __filename;

console.log('path.sep: ', path.sep);
console.log('path.delimiter: ', path.delimiter);
console.log('-----------------------------------');
console.log('path.dirname(): ', path.dirname(string));
console.log('path.extname(): ', path.extname(string));
console.log('path.basename(): ', path.basename(string));
console.log('path.basename(): ', path.basename(string, path.extname(string)));
console.log('-----------------------------------');
console.log('path.parse(): ', path.parse(string));
console.log('path.format(): ', path.format({
    dir: 'D:\\multicampus_coding\\javascript\\node.js\\3_module', 
    name: 'path',
    ext: '.js',
}));
console.log('path.normalize(): ', path.normalize('D:\\multicampus_coding///javascript\\node.js\\3_module///path.js'));
console.log('-----------------------------------');
console.log('path.isAbsolute(): ', path.isAbsolute('D:\\'));
console.log('path.isAbsolute(): ', path.isAbsolute('./home'));
console.log('-----------------------------------');
console.log('path.relative(): ', path.relative('D:\\multicampus_coding\\javascript\\node.js\\3_module\\path.js', 'D:\\'));
console.log('path.join(): ', path.join(__dirname, '..', '..', '/users', '.', '\
3_module'));
console.log('path.resolve(): ', path.resolve(__dirname, '..', 'users', '.', '/3_module')); */

/* 복습 */
 const path = require('path');

 const string = __filename;

 console.log('path.sep: ', path.sep);   // 경로의 구분자
 console.log('path.delimiter: ', path.delimiter);   // 환경변수의 구분자
 console.log('path.dirname(): ', path.dirname(string)); // 파일이 위치한 폴더 경로
 console.log('path.extname(): ', path.extname(string)); // 파일의 확장자
 console.log('path.basename(): ', path.basename(string));   // 파일의 이름(확장자 포함)
 console.log('path.basename(): ', path.basename(string, path.extname(string))); // 파일의 이름(확장자 제외 => 2번째 인자에 path.extname을 추가)
 console.log('path.parse(): ', path.parse(string)); //파일 경로를 root, dir, base, ext, name으로 분리
 console.log('path.format(): ', path.format({       //path.parse()한 객체를 파일 경로로 합침
     dir: 'd:\\multicampus_coding\\javascript\\node.js\\3_module',
     name: 'path', 
     ext: 'js',
 }));
 console.log('path.normalize(): ', path.normalize('d:\\multicampus_coding\\\\javascript\\node.js\\\\3_module////path.js')); // /나 \를 혼용했을 때, 정상적인 경로로 변환
 console.log('path.isAbsolute(): ', path.isAbsolute('C:\\'));   // 파일의 경로가 절대경로인지를 확인 (true: 절대경로, false: 상대경로)
 console.log('path.isAbsolute(): ', path.isAbsolute('./home'));
 console.log('path.relative(): ', path.relative('d:\\multicampus_coding\\javascript\\node.js\\3_module', 'd:\\'));  // 첫번째 경로 => 두번째 경로로 가는 방법 확인
 console.log('path.join(): ', path.join(__dirname, '..', '..', '/users', '.', '/jinah'));   // 여러 경로를 하나로 합침 (상대경로 처리)
 console.log('path.resolve(): ', path.resolve(__dirname, '..', 'users', '.', '/jinah'));    // 여러 경로를 하나로 합침 (절대경로 처리, /를 만나면 이전의 경로를 무시함)
 