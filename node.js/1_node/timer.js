const timeout = setTimeout(() => {
    console.log('1.5초 후 실행');
}, 1500);

const inerval = setInterval(() => {
    console.log('1초마다 실행');
}, 1000);

const timeout2 = setTimeout(() => {
    console.log('실행되지 않아요');
}, 3000);

setTimeout(() => {
    clearTimeout(timeout2);
    clearInterval(inerval);
}, 2500);

const immediate = setImmediate(()=>{
    console.log('즉시 실행');
});

const immediate2 = setImmediate(()=>{
    console.log('실행되지 않아요');
});

clearImmediate(immediate2);