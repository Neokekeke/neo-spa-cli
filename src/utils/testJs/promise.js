// 测试promise

// export function TestPromise() {
//     let count = 1;
//     console.log('promise start');

//     setTimeout(() => {
//         count +=1;
//         Promise.resolve('123');
//         console.log('promise in timeout1');        
//     }, 1000);

//     const p = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (count == 1) {
//                 resolve('321');
//             } else {
//                 reject(new Error('出错了'));
//             }
//             console.log('in timeout2');
//         }, 1000);
//     });

//     p.then(res=> {
//         console.log('in then', res);
//     }).catch(err => {
//         console.log('in catch', err);
//     });
// }

// TestPromise();

// function TestPromise2 () {
//     return new Promise((resolve, reject) => {
//         reject('312');
//     });
// }

// async function t(){
//     const a = await TestPromise2();
//     console.log('a', a);
// }

// t();

function mainPromise(type) {
    return new Promise((resolve, reject) => {

        if (type == 1) {
            resolve('666');
        } else if (type == 10) {
            setTimeout(() => {
                resolve('666');
            }, 3000);
        } else {
            resolve(10);
        }

    });
}

function testMain() {
    // const a = Promise.any([ mainPromise(10), mainPromise(1),  mainPromise(2)]);
    // a.then(res=>{
     
    //     console.log('allaaa', res);
 
    // });
}

testMain();