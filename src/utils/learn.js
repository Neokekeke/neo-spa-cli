/**
 * closures 闭包基本练习
 */

// test 自由的变量
// var num = 10;
// function func1 (args) {
//     num = 11;
//     return function func2() {
//         return num + args;
//     };
// }

// num = 13;
// const testFunc1 = func1(100);
// console.log(testFunc1()); // 112

// test 变量的存储
function fun(n, o) {
    console.log(o);
    return {
        fun: function (m) {
            return fun(m, n);
        }
    };
}
var a = fun(0); // {fn} // undefined
a.fun(1); // 0
a.fun(2); // 0
a.fun(3); // 0

var b = fun(0).fun(1).fun(2).fun(3); // undefined 0 1 2

var c = fun(0).fun(1); // 0 fun(0,undefined).fun(1) => fun(1, 0) // undefined
c.fun(2); // fun(1, 0).fun(2) => fun(2, 1) // 1
c.fun(3); // fun(1, 0).fun(3) => fun(3, 1) // 1

function outer() {
    var result = [];
    for (var i = 0; i<10; i+=1){
        result[i] = (function (i) {
            console.log(i);
        })(i);
    }
    return result;
}

const abc = outer();
console.log('zxczxc', abc, abc[0], abc[1]);

function testClosure() {
    var account = {
        name: 'abc',
        pwd: '123'
    };

    return account;
}

function testClosure2() {
    var account = {
        name: 'abc',
        pwd: '123'
    };

    console.log('zzzzzzzz', account);
    return function abc() {
        return account;
    };
}

const superMan = testClosure2();
superMan();
superMan().name = '123';
console.log('superman', superMan());