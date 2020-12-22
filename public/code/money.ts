import * as frac from './fraction'
import { fst, snd, Tuple } from './tuple'

export type Money = Tuple<number, number>

export const amount = (m: Money) => fst(m)
export const precision = (m: Money) => snd(m)

export const add = (m1: Money, m2: Money) => frac.add(
    [amount(m1) , 10**precision(m1)],
    [amount(m2), 10**precision(m2)]
  )

export const format = (m: Money) =>
  Intl.NumberFormat(
    'pt-BR',
    {
      style: 'currency',
      currency: 'brl'
    }
  ).format(frac.unsafeEval([amount(m), 10**precision(m)]))

const m1: Money = [19993, 2]
const m2: Money = [20093, 3]

frac.format(m2) //?
format(m2) //?

const m3 = add(m1, m2) //?