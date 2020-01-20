console.log("시작");
setTimeout(function(){
    console.log("hello");
    setTimeout(function(){
        console.log("world");
        console.log("끝");
    }, 1000);
}, 2000);