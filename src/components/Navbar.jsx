import { Link } from 'react-router-dom'
import styles from './Navbar.module.sass'

export default function Navbar() {
  return (
    <nav className={styles.content_container}>
      <Link to="/" className={styles.logo}>#VANLIFE</Link>
      <div className={styles.navigation_menu}>
        <Link to="/about" className={styles.menu_item}>About</Link>
        <Link to="/vans" className={styles.menu_item}>Vans</Link>     
      </div>
    </nav> 
  )
}