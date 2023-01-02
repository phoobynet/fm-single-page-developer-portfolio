import styles from './Button.module.scss'
import { ButtonHTMLAttributes, PropsWithChildren } from 'react'

export default function Button({
  children,
  ...buttonAttrs
}: PropsWithChildren<
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>
>) {
  return (
    <button
      {...buttonAttrs}
      className={styles.button}
    >
      {children}
    </button>
  )
}
