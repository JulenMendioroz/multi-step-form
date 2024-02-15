import { useId } from "react"

import styles from "./Input.module.css"

export default function Input({
  error,
  label,
  placeholder,
  required,
}: {
  error?: string
  label: string
  placeholder?: string
  required?: boolean
}) {
  const id = useId()
  const errorId = `${id}-error`

  return (
    <div className={styles.root}>
      <div className={styles.label}>
        <label htmlFor={id}>
          {label}
          {required && (
            <span aria-hidden className={styles.required}>
              {" "}
              *
            </span>
          )}
        </label>
        <p className={styles.error} id={errorId}>
          {error} The field is required
        </p>
      </div>
      <input
        id={id}
        className={styles.input}
        type="tel"
        placeholder={placeholder ?? "e.g. +1 234 567 890"}
        aria-describedby={errorId}
        aria-required={required}
      />
    </div>
  )
}
