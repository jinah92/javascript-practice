var sayNode = function() {
    console.log('Node');
}
var es = 'ES';
// var oldObject={
//     sayJS:function(){
//         console.log('JS');
//     },
//     sayNode : sayNode,
// };

var newObject = {
    sayJS:function(){
        console.log('JS');
    }, 
    sayNode,
    [es+6] : 'fantastic',
};

// oldObject.sayJS();
// oldObject.sayNode();

// oldObject[es+6] = 'Fantastic';

// console.log(oldObject.ES6);
// console.log(oldObject.es6);

newObject.sayNode();
newObject.sayJS();
console.log(newObject.ES6);