import styles from './Heading.module.scss'
import { PropsWithChildren } from 'react'

export enum HeadingSize {
  xl = 1,
  l,
  m,
}

interface Props {
  size: HeadingSize
}

export default function Heading({ children, size }: PropsWithChildren<Props>) {
  return (
    <div
      className={styles[`heading-${HeadingSize[size]}`]}
      role="heading"
      aria-level={size}
    >
      {children}
    </div>
  )
}
