class Observer {
  message = "Hello you!"

  subscribe(cb) {
    setTimeout(() => cb(this.message), 1000)
  }
}

class Chat {
  constructor(observer) {
    this._observer = observer
  }

  start() {
    this._observer.subscribe((message) => this.handleMessage(message))
  }

  handleMessage(message) {
    this.print(message)
  }

  print(receivedMessageText) {
    console.log('> ' + receivedMessageText)
  }
}

const chat = new Chat(new Observer()).start()
