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
