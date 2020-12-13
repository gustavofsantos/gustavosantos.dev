class Observer {
  subscribe(cb) {
    setTimeout(cb, 2000)
  }
}

class A {
  constructor(observer) {
    this._observer = observer
  }

  start() {
    this._observer.subscribe(this.handleMessage.bind(this))
  }

  handleMessage() {
    this.doCalculation()
  }

  doCalculation() {
    console.log('> run doCalculation')
  }
}

const a = new A(new Observer())
a.start()
