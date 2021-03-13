// 纯函数、缓存、测试和并行执行
const memerize = (fn) => {
    let cache = {};

    return function() {
        const key = JSON.stringify(arguments[0]);
        cache[key] = cache[key] || fn.apply(this, arguments);
        
        console.log('key:::', key);
        return cache[key];
    };
};

function test(value) {
    console.log('memerize init');
    return value;
}

const _memerize = memerize(test);

console.log(_memerize(1));
console.log(_memerize(1));
console.log(_memerize(12));