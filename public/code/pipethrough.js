const Pipethrough = (data) => ({
  pipe: (fn, ...args) => {
    if (data instanceof Promise) {
      return Pipethrough(data.then((d) => fn(d, ...args)))
    }

    return Pipethrough(fn(data, ...args))
  },
  tap: (fn) => {
    fn(data)
    return Pipethrough(data)
  },
  value: () => data
})

const findById = (id) => Promise.resolve({ id, name: 'Gustavo Santos' })

const result = Pipethrough('123')
  .tap(console.log)
  .pipe(findById)
  .tap(console.log)
  .pipe(({ name }) => ({
    firstName: name.split(' ')[0],
    lastName: name.split(' ')[1]
  }))
  .pipe((user) => user.firstName)
  .pipe((firstName) => firstName.toUpperCase())
  .value()

result //?
