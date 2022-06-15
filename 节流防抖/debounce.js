// 防抖就是「回城被打断」
const debounce = (fn, time) => {
    let 回城计时器 = null
    return (...args) => {
        if (回城计时器 !== null) {
            clearTimeout(回城计时器) // 打断回城 
        }// 重新回城 
        回城计时器 = setTimeout(() => {
            fn.call(undefined, ...args) // 回城后调用 fn 
            回城计时器 = null
        }, time)
    }
}
