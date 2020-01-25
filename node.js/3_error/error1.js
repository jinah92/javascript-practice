/* setInterval(() => {
    console.log('시작'); 
    try {
        throw new Error('서버를 고장내주마');
    } catch(err) {
        console.error(err);
    }
    console.log('끝');
}, 1000); */

/* 복습 */
setInterval(()=>{
    console.log('시작');
    try{
        throw new Error('서버를 고장 냄');
    } catch(err) {       // 프로세스가 안죽도록 하는 영역 (에러를 고치지는 않음)
        console.error(err);
    }
}, 1000);