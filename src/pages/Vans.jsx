import { useEffect, useState } from 'react'
import Tag from '../components/Tag'
import styles from './Vans.module.sass'

export default function Vans() {
  const [vansData, setVansData] = useState([])

  useEffect(() => {
    fetch("/api/vans")
      .then(res => res.json())
      .then(data => setVansData(data.vans))
  }, [])

  const vansList = vansData.map(van =>
    <li key={van.id} className={styles.van_li} >
      <img src={van.imageUrl} alt={van.name} className={styles.van_img}/>
      <h5 className={styles.van_title}>{van.name}</h5>
      <div className={styles.van_type_price}>
        <Tag name={van.type} />
        <p className={styles.van_price}>${van.price} /day</p>
      </div>
    </li>
  )

  return (
    <div className={styles.content_container}>
      <h2 className={styles.title}>Explore our van options</h2>
      <ul className={styles.vans_ul}>
        {vansList}
      </ul>
    </div>
  )
}