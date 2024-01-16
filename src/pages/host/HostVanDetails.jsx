import { useEffect, useState } from 'react'
import { useParams, Link, NavLink, Outlet } from 'react-router-dom'
import Tag from '../../components/ui-elements/Tag'
import styles from './HostVanDetails.module.sass'

export default function HostVanDetail() {
  const [van, setVan] = useState(null)
  const params = useParams()

  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then(res => res.json())
      .then(data => setVan(data.vans))
  }, [params.id])

  const active = ({isActive}) => {
    return isActive ? styles.menu_item_active : styles.menu_item
  }

  return (
    <div className="container">
      
      {/* Back to all vans */}
      <Link to=".." relative="path">
        <span className={styles.back_arrow}>&larr;</span>
        <span className={styles.back_link}>Back to all vans</span>
      </Link>

      {/* Van banner info */}
      <div className={styles.van_container}>
        { van && (
          <div className={styles.van_key_info}>
            <img className={styles.van_img} src={van.imageUrl} alt={van.name} />
            <div className={styles.van_key_text}>
              <Tag name="simple" />
              <h3 className={styles.van_name}>{van.name}</h3>
              <p className={styles.van_price}>
                <span className={styles.van_price_tag}>${van.price}</span>/day
              </p>
            </div>
          </div>
        )}

        {/* Van sub-menu */}
        <nav className={styles.menu}>
          <NavLink to="." end className={active}>Details</NavLink>
          <NavLink to="pricing" className={active}>Pricing</NavLink>
          <NavLink to="photos" className={active}>Photos</NavLink>  
        </nav>
        
        {/* Outlet */}
        <Outlet context={{van}} />
  
      </div>
    </div>
  )
}