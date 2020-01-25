const condition = true;     // true면 resolve, false면 reject

// 프로미스 객체(promise) 생성
const promise = new Promise((resolve, reject)=>{    
    if(condition){
        resolve('성공');
    } else {
        reject('실패');
    }
});

// 생성한 promise 변수에 then, catch 메서드를 붙일 수 있음
// 프로미스 내부에서 resolve가 호출되면 then이 실행, reject가 호출되면 catch가 실행
promise
    .then((message)=>{
        console.log(message);   // 성공한 경우(resolve) 실행되는 콜백
    })
    .catch((error)=>{
        console.error(error);   // 실패한 경우(reject) 실행되는 콜백
    });

// then이나 catch에서 다시 다른 then이나 catch를 붙일 수 있음
// 이전 then의 리턴값을 다음 then의 매개변수로 전달
promise
    .then((message)=>{
        return new Promise((resolve, reject)=>{
            resolve(message);
        });
    })
    .then((message2)=>{
        console.log(message2);
        return new Promise((resolve, reject)=>{
            resolve(message2);
        });
    })
    .then((message3)=>{
        console.log(message3);
    })
    .catch((error)=>{
        console.log(error);
    });

// 프로미스 여러개를 한번에 실행 (Promise.all)
const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
Promise.all([promise1, promise2])
    .then((result)=>{
        console.log(result);
    })
    .catch((error)=>{
        console.error(error);
    });



/* Promised의 이해 */
// 1. 프로미스는 주로 서버에서 받아온 화면을 화면에 표시할 때 사용한다.

// ex. 일반적인 웹 어플리케이션 구현 시, 서버에서 데이터를 요청하고 받아오기 위한 API
// 문제점: 데이터를 받아오기 전에, 마치 데이터를 받은 것처럼 화면에 데이터를 표시하려고 할 때 => 에러가 발생하거나 빈 화면이 뜰 수 있음
$.get('url 주소/products/1', function(respone){
    ...
});


/* 예제 코드1 : Ajax 통신코드 (콜백 함수 이용) */
function getData(callbackFunc){
    $.get('url 주소/products/1', function (response) {
        callbackFunc(respone);  // 서버에서 받은 데이터를 callbackFunc()에 넘김
    });
}

getData(function(tableData){
    console.log(tableData);     // $.get()의 response 값이 tablaData에 전달됨
});

/* 예제 코드2 : Ajax 통신코드 (프로미스) */
function getData(callback) {
    // new Promise() 추가
    return new Promise(function(resolve, reject){
        $.get('url주소/products/1', function(respone){
            // 데이터를 받으면 reslove()를 호출
            resolve(respone);
        });
    });
}

// getData()의 실행이 끝나면 호출되는 then()
getData()
    .then(function(tableData){
        // resolve()의 결과 값이 여기로 전달됨
        console.log(tableData); // $.get()의 response 값이 tableData에 전달됨
    });


/* 프로미스의 3가지 상태(state) <=> 프로미스의 처리과정 */
// Pending(대기) : 비동기 처리 로직이 아직 완료되지 않은 상태
// Fulfilled(이행) : 비동기 처리가 완료되어, 프로미스가 결과 값을 반환해준 상태
// Rejected(실패) : 비동기 처리가 실패하거나 오류가 발생한 상태

// 1. Pending(대기)
new Promise();
new Promise(function(resolve, reject){  // 콜백 함수의 인자로 resolve, reject에 접근
    ...
});
new Promise((resolve, reject)=>{        // 콜백 함수의 인자로 resolve, reject에 접근
    ...
});

// 2. Fulfilled(이행)
new Promise(function(resolve, reject){
    resolve();  // reslove 실행
});
new Promise((resolve, reject)=>{
    resolve();
});

/* 이행 상태가 되면, then()을 이용하여 처리 결과 값을 받을 수 있음 */
 function getData(){
     return new Promise((resolve, reject)=>{
         var data = 100;
         resolve(data); // 이행
     });
 }

 // resolve()의 결과 값 data를 resolvedData로 받음
getData()
 .then((resolvedData)=>{
     console.log(resolvedData);
 });

// 3. Rejected (실패)
// reject 인자로 reject()메서드를 실행하면 실패 상태가 된다.
new Promise((resolve, reject)=>{
    reject();
}); 
 
/* 실패 상태가 되면, 실패한 이유(실패 처리 결과값)을 catch()로 받을 수 있음. */
function getData(){
    return new Promise((resolve, reject)=>{
        reject(new Error("request is failed!"));
    });
}

// reject()의 결과값 Error를 err에 받음 
getData()
    .then()
    .catch((err)=>{
        console.log(err);
    });

/* 예제 코드 */
function getData(){
    return new Promise((resolve, reject)=>{
        $.get('url주소/products/1', (response)=>{
            if(response){
                resolve(response);
            }
            reject(new Error("request is failed"));
        });
    });
}

getData()
    .then((data)=>{
        console.log(data);  // response 값 출력 (Fulfilled)
    })
    .catch((err)=>{
        console.error(err); // error 출력 (Rejected)
    });

/* 예제 코드 (여러 개의 프로미스 연결) */
new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(1)
    }, 2000);   // 2초후 콜백함수 resolve(1) 실행
})
.then((result)=>{
    console.log(result);    // 1
    return result + 10;
})
.then((result)=>{
    console.log(result);    // 11
    return result + 20;
})
.then((result)=>{
    console.log(result);    // 31
});

/* 프로미스의 에러 처리 방법 (2가지) */
// 1. then()의 두 번째 인자로 처리
getData()
    .then(handleSuccess, handleError);

// 2. catch()를 이용 <=== 권장
getData()
    .then()
    .catch();