/* const fs = require('fs');

fs.readFile('./readme.txt', (err, buffer) => {
    if (err) {
        throw err;
    }
    console.log(buffer);
    console.log(buffer.toString());
}); */

/* 복습 */
const fs = require('fs');

fs.readFile('./readme.txt', (err, data)=>{
    if(err){
        throw err;
    }
    console.log(data);
    console.log(data.toString());
});