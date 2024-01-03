import { Link } from "react-router-dom"
import styles from './Button.module.sass'

export default function Button({ backgroundColor, url, text }) {
  return (
    <Link to={url} className={`${styles.btn} ${styles[backgroundColor]}`}>
      {text}
    </ Link>
  )
}