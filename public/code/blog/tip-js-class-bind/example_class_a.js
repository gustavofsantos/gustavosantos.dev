class A {
  name = "class A"

  run() {
    [1,2,3].map(this.handle)
  }

  handle(index) {
    console.log(index, ":", this.name)
  }
}

new A().run()