class EventHub {
    map = {}
    on(name, fn) {
        this.map[name] = this.map[name] || []
        this.map[name].push(fn)
    }
    emit(name, data) {
        const fnList = this.map[name] || []
        fnList.forEach(fn => fn.call(undefined, data))
    }
    off(name, fn) {
        const fnList = this.map[name] || []
        const index = fnList.indexOf(fn)
        if (index < 0) return
        fnList.splice(index, 1)
    }
}
// 使用
const e = new EventHub()
e.on('click', (name) => {
    console.log('hi ' + name)
})
e.on('click', (name) => {
    console.log('hello ' + name)
})
setTimeout(() => {
    e.emit('click', 'frank')
}, 3000)
