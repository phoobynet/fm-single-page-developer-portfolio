import styles from './Input.module.scss'
import { InputHTMLAttributes, useEffect, useRef } from 'react'

interface Props
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> {
  error?: string
}

export default function Input({ error, ...inputAttrs }: Props) {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (error) {
      inputRef.current?.setCustomValidity(error)
    } else {
      inputRef.current?.setCustomValidity('')
    }
  }, [error])

  return (
    <div className={styles.container}>
      <input
        {...inputAttrs}
        className={styles.input}
        ref={inputRef}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  )
}
