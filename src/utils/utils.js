// add(1,2,3) == add(1,2)(3) == add(1)(2)(3)
let aa = require('./testNode');
console.log(aa);

function curryFn(fn){
    // 获取fn的参数长度
    const argsLens = fn.length;
    // 声明一个数组，用了存储参数，最后再给需要调用的函数使用
    const argsArr = [];
    return function inner(){
        argsArr.push(...Array.from(arguments));
        if (argsArr.length < argsLens){
            return inner;
        } else {
            return fn.apply(this, argsArr);
        }
    };
}

function fnc(a, b, c){
    return a + b + c;
}
const add = curryFn(fnc);
const add2 = curryFn(fnc);
const add3 = curryFn(fnc);
console.log('add(1,2,3)', add(1,2,3));
console.log('add(1,2)(3)', add2(1,2)(3));
console.log('add(1)(2)(3)', add3(1)(2)(3));

var a = {
    name: 'aaa',
    say: function(){
        console.log('say a', this);
    }
};

var b = {
    name: 'bbb',
    say: function(){
        console.log('say b', this);
    }
};

var c = {
    name: 'ccc',
    say: function(){
        console.log('say c', this);
    }
};

b.say.bind(a).bind(c)();