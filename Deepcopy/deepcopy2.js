const deepClone = (a, cache) => {
    if (!cache) {
        cache = new Map() // 缓存不能全局，最好临时创建并递归传递
    }
    if (a instanceof Object) { // 不考虑跨 iframe
        if (cache.get(a)) { return cache.get(a) }
        let result
        if (a instanceof Function) {
            if (a.prototype) { // 有 prototype 就是普通函数
                result = function () { return a.apply(this, arguments) }
            } else {
                result = (...args) => { return a.call(undefined, ...args) }
            }
        } else if (a instanceof Array) {
            result = []
        } else if (a instanceof Date) {
            result = new Date(a - 0)
        } else if (a instanceof RegExp) {
            result = new RegExp(a.source, a.flags)
        } else {
            result = {}
        }

        return result
    } else {
        return a
    }
}
