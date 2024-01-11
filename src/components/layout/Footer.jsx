import styles from './Footer.module.sass'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.content_container}>
      &copy; {currentYear} #VANLIFE
    </footer>
  )
}