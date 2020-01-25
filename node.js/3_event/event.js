const EventEmitter = require('events');

const myEvent = new EventEmitter();
myEvent.addListener('event1', ()=>{
    console.log('이벤트 1');
});
myEvent.on('event2', ()=>{
    console.log('이벤트 2');
});
myEvent.on('event2', ()=>{
    console.log('이벤트2 추가');
});

myEvent.emit('event1');
myEvent.emit('event2');

myEvent.once('event3', ()=>{
    console.log('이벤트 3');
});
myEvent.emit('event3');
myEvent.emit('event3');     // 실행 안됨

myEvent.on('event4', ()=>{
    console.log('이벤트 4');
});
myEvent.removeAllListeners('event4');       // 이벤트(event4)에 연결된 리스너를 모두 삭제
myEvent.emit('event4');

const listener = ()=>{
    console.log('이벤트 5');
};
myEvent.on('event5', listener);
myEvent.removeListener('event5', listener); // 이벤트(event5)에 연결된 리스너를 하나씩 삭제
myEvent.emit('event5');

console.log(myEvent.listenerCount('event2'));