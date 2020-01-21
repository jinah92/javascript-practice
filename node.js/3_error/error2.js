const fs = require('fs');

setInterval(() => {
    fs.unlink('./abcdefg.js', (err) => {       
        if(err) {                       // 없는 파일을 unlink  => 에러 발생
            console.error(err);
        } else {                        // 정상 실행
            console.log('bbb'); 
        }
    });
}, 1000);