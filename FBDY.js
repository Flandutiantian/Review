const eventHub = {
    map: {
        // click: [f1 , f2]
    },
    on: (name, fn) => {
        eventHub.map[name] = eventHub.map[name] || []
        eventHub.map[name].push(fn)
    },
    emit: (name, data) => {
        const q = eventHub.map[name]
        if (!q) return
        q.map(f => f.call(null, data))
        return undefined
    },
    off: (name, fn) => {
        const q = eventHub.map[name]
        if (!q) { return }
        const index = q.indexOf(fn)
        if (index < 0) { return }
        q.splice(index, 1)
    }
}
