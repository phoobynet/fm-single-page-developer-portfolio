import styles from './Heading.module.scss'
import { PropsWithChildren } from 'react'

export enum HeadingSize {
  xl = 1,
  l,
  m,
}

interface Props {
  size: HeadingSize
  className?: string
}

export default function Heading({
  children,
  size,
  className,
}: PropsWithChildren<Props>) {
  const headSizeClasses = styles[`heading-${HeadingSize[size]}`]

  return (
    <div
      className={`${headSizeClasses} ${className}`}
      role="heading"
      aria-level={size}
    >
      {children}
    </div>
  )
}
