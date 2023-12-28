import styles from './Footer.module.sass'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <div className={styles.content_container}>
      &copy; {currentYear} #VANLIFE
    </div>
  )
}