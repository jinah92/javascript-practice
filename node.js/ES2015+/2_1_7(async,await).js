/* async와 await */
// 자바스크립트의 비동기 처리 패전 중, 가장 최근에 나온 문법
// 기존의 비동기 처리방식인 콜백 함수, 프로미스의 단점을 보완

/* 예제 */
function fetchItems(){
    return new Promise((resolve, reject)=>{
        var items = [1, 2, 3];
        resolve(items);
    });
}

async function logItems(){
    var resultItems = await fetchItems();   // await 대신애, 콜백함수나 .then()을 사용할 수도 있음.
    console.log(resultItems);   // [1, 2, 3] 출력
}

/* async & await 예외 처리 */
// try, catch
async function logTodoTitle(){
    try {
        var user = await fecthUser();
        if(user.id === 1){
            var todo = await fetchToDo();
            console.log(todo.title);
        }
    } catch (error) {
        console.log(error);
    }
}


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