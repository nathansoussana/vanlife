import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './HostVans.module.sass'

export default function HostVans() {
  const [vansData, setVansData] = useState([])

  useEffect(() => {
    fetch("/api/host/vans")
      .then(res => res.json())
      .then(data => setVansData(data.vans))
  }, [])

  const vansList = vansData.map(van =>
    <li key={van.id} className={styles.van_item}>
      <Link to={`${van.id}`}>
        <div className={styles.van_item_content}>
          <img src={van.imageUrl} alt={van.name} className={styles.van_img} />
          <div className={styles.van_text}>
            <h4 className={styles.van_title}>{van.name}</h4>
            <p className={styles.van_price}>${van.price}/day</p>
          </div>
        </div>
      </Link>
    </li>
  )

  return (
    <div className="container">
      <h2 className={styles.header}>Your Listed Vans</h2>
      <ul className={styles.vans_list}>{vansList}</ul>
    </div>
  )
}