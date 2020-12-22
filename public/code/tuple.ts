export type Tuple<A, B> = readonly [A, B]

export const fst = <A>(t: Tuple<A, any>) => t[0]

export const snd = <B>(t: Tuple<any, B>) => t[1]


