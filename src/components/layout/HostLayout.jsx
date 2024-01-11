import { NavLink, Outlet } from "react-router-dom"
import styles from './HostLayout.module.sass'

export default function HostLayout() {
  const active = ({isActive}) => {
    return (
      isActive ? 
      styles.menu_item_active : 
      styles.menu_item
    )
  }

  return (
    <div className={styles.container}>
      <nav className={styles.menu}>
        <NavLink to="/host" end className={active}>
          Dashboard
        </NavLink>
        <NavLink to="/host/income" className={active}>
          Income
        </NavLink>
        <NavLink to="/host/vans" className={active}>
          Vans
        </NavLink>
        <NavLink to="/host/reviews" className={active}>
          Reviews
        </NavLink>     
      </nav>
      <Outlet />
    </div>
  )
}