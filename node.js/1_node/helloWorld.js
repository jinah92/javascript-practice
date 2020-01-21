function a() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('hello');
        }, 2000);
    });
}

function b() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('world');
        }, 1000);
    });
}

async function c() {
    console.log("start");
    const v1 = await a();
    console.log(v1);
    const v2 = await b();
    console.log(v2);
    console.log("end");
}

c();

/*
console.log("시작");
setTimeout(function(){
    console.log("hello");
    setTimeout(function(){
        console.log("world");
        console.log("끝");
    }, 1000);
}, 2000);
*/