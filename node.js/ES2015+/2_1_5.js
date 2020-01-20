// 객체, 배열로부터 속성 또는 요소를 접근하는 방법

// case 1. 객체의 속성을 같은 이름의 변수에 대입
var candyMachine = {
    status: {
        name: 'node',
        count: 5,

    },
    getCandy: function() {
        this.status.count--;
        return this.status.count;
    }
};
var getCandy = candyMachine.getCandy;
var count = candyMachine.status.count;

// case 2. 비구조화 할당방법
const candyMachine = {
    status: {
        name: 'node',
        count: 5,
    },
    getCandy() {
        this.status.count--;
        return this.status.count;
    }
};
const { getCandy, status: {count} } = candyMachine; // 객체 안의 속성을 찾아 변수와 매핑

// 배열의 비구조화 (1)
var array = ['nodejs', {}, 10, true];   // {}: 비어있는 객체
var node = array[0];
var obj = array[1];
var bool = array[3];

// 배열의 비구조화 (2)
const array = ['nodejs', {}, 10, true];
const [node, obj, , bool] = array;