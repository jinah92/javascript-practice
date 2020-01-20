function a() {
    return new Promise((resolve, reject)=>{    // Promise(r, re)=>{}
            setTimeout(()=>{                    // 2초뒤에 "hello"를 결과물로 주기를 약속
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

console.log('시작');
a()                                             // a 함수 호출 ==> Promise 객체를 리턴
    .then((result)=>{                           // 약속이 이행되었을 때(=2초 뒤) 다음 명령을 수행. "hello"를 result에 받음
        console.log(result);                    // "hello" 출력
        return b();                             // b 함수 호출
    })
    .then((result)=>{                           // 전 약속(b함수 호출)이 이행되었을 때(=1초 뒤) 다음 병령을 수행. "world"를 result에 받음
        console.log(result);
        console.log('끝');
    })
    .catch((error)=>{                           // 전 약속이 이행되지 않은 경우, 실행되는 구역
        console.log(error);
    });
