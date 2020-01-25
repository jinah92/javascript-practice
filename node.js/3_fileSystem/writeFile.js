/* const fs = require('fs');

fs.writeFile('./write.txt', '글이 입력됩니다.', (err) => {
    if(err){
        throw err;
    }
    fs.readFile('./write.txt', (err, buffer) => {
        if(err){
            throw err;
        }
        console.log(buffer.toString());
    });
}); */

/* 복습 */
const fs = require('fs');

fs.writeFile('./writeme.txt', '글이 입력되었어요', (err)=>{
    if(err) {
        throw err;
    }
    fs.readFile('./writeme.txt', (err, data)=>{
        if (err) {
            throw err;
        }
        console.log(data.toString());
    });
});