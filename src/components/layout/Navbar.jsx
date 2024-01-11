import { Link, NavLink } from 'react-router-dom'
import styles from './Navbar.module.sass'

export default function Navbar() {
  const active = ({ isActive }) => {
    return isActive ? styles.menu_item_active : styles.menu_item
  }

  return (
    <nav className={styles.content_container}>

      {/* Logo */}
      <Link to="/" className={styles.logo}>#VANLIFE</Link>

      {/* Menu */}
      <div className={styles.navigation_menu}>
        <NavLink to="host" className={active}>Host</NavLink>
        <NavLink to="about" className={active}>About</NavLink>
        <NavLink to="vans" className={active}>Vans</NavLink>     
      </div>
      
    </nav> 
  )
}