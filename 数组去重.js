var uniq = function (a) {
    var map = new Map()
    for (let i = 0; i < a.length; i++) {
        let number = a[i] // 1 ~ 3
        if (number === undefined) { continue }
        if (map.has(number)) {
            continue
        } map.set(number, true)
    }
    return [...map.keys()]
}