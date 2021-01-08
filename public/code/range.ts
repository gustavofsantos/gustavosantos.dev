export class Frac {
  constructor(private _n: number, private _m: number = 1) {}

  get n() {
    return this._n
  }
  get m() {
    return this._m
  }
  get unsafeEval() {
    return this._n / this._m
  }

  get format() {
    return `${this.n}/${this.m}`
  }

  add(f: Frac): Frac {
    const m = this.m * f.m
    const n = this.n * m + f.n * m
    return new Frac(n, m)
  }
}

const f1 = new Frac(3, 4)
const f2 = new Frac(4, 7)

f1.add(f2).format //?

const addFrac = (f1: Frac, f2: Frac) => {
  const m = f1.m * f2.m
  const n = f1.n * m + f2.n * m
  return new Frac(n, m)
}

addFrac(f1, f2).format //?
addFrac(f1, f2).unsafeEval //?

class Money {
  private frac: Frac

  constructor(amount: number, private _precision = 2) {
    this.frac = new Frac(amount, 10 ** _precision)
  }

  get amount() {
    return this.frac.n
  }
  get precision() {
    return this._precision
  }
  get format() {
    return Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'brl'
    }).format(this.frac.unsafeEval)
  }
}

new Money(19993, 2).format //?

// class Money {
//   constructor(public amount: number, public precision = 2) {}
// }

// const pretty = (m: Money) =>
//   Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'brl', maximumFractionDigits: 2 })
//     .format(m.amount)

// const add = (m1: Money, m2: Money) => new Money(m1.amount + m2.amount);

// const m = new Money(20090);

// pretty(m) //?

// pretty(add(new Money(39998), new Money(2599))) //?
