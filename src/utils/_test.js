const testCurry1 = (a, b, c, d, e) => {
    return a+b+c+d+e;
};

const testCurry2 = a => b => c => d => e => {
    return a+b+c+d+e;
};

// apply call 

const testReduce = () => {
    const initialValue = [1, 23, 33, 66, 99];
    const total = initialValue.reduce(function(total, item, index, arr) {
        console.log('total1', total);
        total += item;
        return total;
    });
    console.log('total2', total);
};

export {
    testCurry1,
    testCurry2,
    testReduce
};