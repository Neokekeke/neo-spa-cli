const a = next => () => {
    console.log('a pre');
    next(); // 执行b(c(d()));
    console.log('a after');
};
a();

const b = next => () => {
    console.log('b pre');
    next(); // 执行c(d());
    console.log('b after');
};
console.log(a(b())());

const c = next => () => {
    console.log('c pre');
    next(); // 执行d(); 
    console.log('c after');
};

const d = () => {
    console.log('Hello World');
};

function compose(...funcs) {
    return funcs.reduce((a, b) => (...args) => a(b(...args)));
}

// console.log(compose(a, b, c)(d)());

// a(b(c(d())));