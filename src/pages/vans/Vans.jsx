import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Tag from '../../components/ui-elements/Tag'
import styles from './Vans.module.sass'
import tagStyles from '../../components/ui-elements/Tag.module.sass'

export default function Vans() {
  const [vansData, setVansData] = useState([])

  const [searchParams, setSearchParams] = useSearchParams()
  const typeFilter = searchParams.get("type")

  useEffect(() => {
    fetch("/api/vans")
      .then(res => res.json())
      .then(data => setVansData(data.vans))
  }, [])

  const vansDataFiltered = typeFilter ? vansData.filter(van => van.type === typeFilter) : vansData

  const vansList = vansDataFiltered.map(van =>
      <li key={van.id} className={styles.van_item}>
        <Link to={`/vans/${van.id}`}>
          <img src={van.imageUrl} alt={van.name} className={styles.van_img} />
          <h5 className={styles.van_name}>{van.name}</h5>
          <p className={styles.van_price}>${van.price}/day</p>
          <Tag name={van.type} />
        </Link>
      </li>
  )

  return (
    <div className={styles.content_container}>
      <h2 className={styles.header}>Explore our van options</h2>
      <div className={styles.filters}>
        <div onClick={() => setSearchParams({type: "simple"})} className={styles.filter}>simple</div>
        <div onClick={() => setSearchParams({type: "luxury"})} className={styles.filter}>luxury</div>
        <div onClick={() => setSearchParams({type: "rugged"})} className={styles.filter}>rugged</div>
        <div onClick={() => setSearchParams({})} className={styles.clear}>Clear filters</div>
      </div>
      <ul className={styles.vans_list}>{vansList}</ul>
    </div>
  )
}