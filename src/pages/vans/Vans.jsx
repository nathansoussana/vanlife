import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Tag from '../../components/ui-elements/Tag'
import styles from './Vans.module.sass'

export default function Vans() {
  const [vansData, setVansData] = useState([])

  useEffect(() => {
    fetch("/api/vans")
      .then(res => res.json())
      .then(data => setVansData(data.vans))
  }, [])

  const vansList = vansData.map(van =>
    <li 
      key={van.id} 
      className={styles.van_item} 
    >
      <Link to={`/vans/${van.id}`}>
        <img 
          src={van.imageUrl} 
          alt={van.name} 
          className={styles.van_img}
        />
        <h5 className={styles.van_name}>
          {van.name}
        </h5>
        <p className={styles.van_price}>
          ${van.price} /day
        </p>
        <Tag name={van.type} />
      </Link>
    </li>
  )

  return (
    <div className={styles.content_container}>
      <h2 className={styles.header}>
        Explore our van options
      </h2>
      <ul className={styles.vans_list}>
        {vansList}
      </ul>
    </div>
  )
}