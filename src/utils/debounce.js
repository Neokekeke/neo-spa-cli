/**
 * 函数防抖操作
 * 多次触发，只在最后一次触发时，执行目标函数，提升部分性能
 */

export function debounce(fn, delay, options) {
    let timer = null;

    return function () {
        const args = arguments;

        if (timer) { // 每次事件被触发时，都去清除之前的旧定时器，直至最后一次事件触发结束
            clearTimeout(timer);
        }

        timer = setTimeout(function () {
            fn.apply(this, args);
        }, delay || 2000);
    };
}
