const pipeline = (...fns) => (...args) => fns.reduce((acc, fn) => fn(acc), args)

const f = (x) => `f(${x})`
const g = (x) => `g(${x})`
const h = (x) => `h(${x})`

const w = pipeline(f, g, h)
w(10, 11) //?
