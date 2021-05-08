import { FC } from 'react'

type Props = {
  value: boolean | (() => boolean)
}

export const When: FC<Props> = ({ children, value }) => {
  if (typeof value === 'function' && !!value()) {
    return typeof children === 'function' ? children() : children
  }

  if (typeof value !== 'function' && !!value) {
    return typeof children === 'function' ? children() : children
  }

  return <></>
}
