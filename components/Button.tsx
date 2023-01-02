import styles from './Button.module.scss'
import { ButtonHTMLAttributes, PropsWithChildren } from 'react'

export default function Button({
  children,
  ...buttonAttrs
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) {
  const { className, ...theRest } = buttonAttrs
  return (
    <button
      {...theRest}
      className={`${styles.button} ${className}`}
    >
      {children}
    </button>
  )
}
