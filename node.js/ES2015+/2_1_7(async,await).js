function a() {
    return new Promise((resolve, reject)=>{   
            setTimeout(()=>{                    
                resolve("hello");
            }, 2000);    
        });    
}

function b() {
    return new Promise((resolve, reject)=>{   
            setTimeout(()=>{
                resolve("world");
            }, 1000);    
        });    
}

async function c(){
    console.log('시작');
    const data1 = await a();
    console.log(data1);

    const data2 = await b();
    console.log(data2);
    console.log('끝');
}

c();