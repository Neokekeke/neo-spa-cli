// 一个节流函数

export function throlltle(fn){
    let timer = null;

    return function(){
        const args = arguments;

        if (timer){
            return;
        }

         timer = setTimeout(() => {
            fn.apply(this, args);
            clearTimeout(timer);
            timer = null;
        }, 2000);
    };
}