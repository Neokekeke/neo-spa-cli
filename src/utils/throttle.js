/**
 * 函数节流操作
 * 限制目标函数调用的频率，在限定时间内只执行一次，比如：1s内不能调用2次，提升部分性能
 */

/**
 * function才有arguments 
 * @param {*} fn 待执行函数
 * @param {*} delay 需要延迟执行时间
 * @param {*} options 可选的参数
 */
export function throttle(fn, delay, options) {
    let timer = null; // 计时器

    return function() {
        const args = arguments; // 保留调用时传入的参数
        console.log(args, this);

        if (timer) { // 如果计时器还在说明还没执行结束，则继续执行
            return false;
        }

        timer = setTimeout(function() {
            clearTimeout(timer);
            timer = null;
            fn.apply(this, args);
        }, delay || 2000);
    };
}
