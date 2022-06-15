// 节流就是「技能冷却中」
const throttle = (fn, time) => {
    let 冷却中 = false
    return (...args) => {
        if (冷却中) return
        fn.call(undefined, ...args)
        冷却中 = true
        setTimeout(() => {
            冷却中 = false
        }, time)
    }
}
// 还有一个版本是在冷却结束时调用 fn
// 简洁版，删掉冷却中变量，直接使用 timer 代替
const throttle = (f, time) => {
    let timer = null
    return (...args) => {
        if (timer) { return }
        f.call(undefined, ...args)
        timer = setTimeout(() => {
            timer = null
        }, time)
    }
}

const f = throttle(() => { console.log('hi') }, 3000)
f() // 打印 hi
f() // 技能冷却中
