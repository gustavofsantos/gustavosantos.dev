import { Tuple, fst, snd } from "./tuple"

export type Frac = Tuple<number, number>

export const createFrac = (n: number, m: number): Frac => [n, m]

export const add = (f1: Frac, f2: Frac): Frac => {
  const m = snd(f1) * snd(f2)
  const n = m* fst(f1) + m* fst(f2)

  return [n, m]
}


export const format = (f: Frac) =>
  `${fst(f)}/${snd(f)}`

export const unsafeEval = (f: Frac) => fst(f) / snd(f)
