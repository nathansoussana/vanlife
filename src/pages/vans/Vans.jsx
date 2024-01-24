import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { getVans } from '../../../api.js'
import Tag from '../../components/ui-elements/Tag'
import styles from './Vans.module.sass'
import tagStyles from '../../components/ui-elements/Tag.module.sass'

export default function Vans() {
  const [vansData, setVansData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const [searchParams, setSearchParams] = useSearchParams()
  const typeFilter = searchParams.get("type")

  useEffect(() => {
    async function loadVans() {
      setLoading(true)
      try {
        const data = await getVans()
        setVansData(data)
      } catch(err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    loadVans()
  }, [])

  const vansDataFiltered = typeFilter ? vansData.filter(van => van.type === typeFilter) : vansData

  const vansList = vansDataFiltered.map(van =>
      <li key={van.id} className={styles.van_item}>
        <Link to={van.id} state={{ search: searchParams.toString() }}>
          <img src={van.imageUrl} alt={van.name} className={styles.van_img} />
          <h5 className={styles.van_name}>{van.name}</h5>
          <p className={styles.van_price}>${van.price}/day</p>
          <Tag name={van.type} />
        </Link>
      </li>
  )

  function filterClassName(vanType) { 
    return `${styles.filter} ${typeFilter === vanType ? tagStyles[vanType] : null}`
  }

  if (loading) {
    return (
      <div className={styles.content_container}>
        <h2 aria-live="polite">Loading...</h2> 
      </div>
    )
  }

  if (error) {
    return (
      <div className={styles.content_container}>
        <h2 aria-live="assertive">There was an error: {error.message}.</h2> 
      </div>
    )
  }

  return (
    <div className={styles.content_container}>
      <h2 className={styles.header}>Explore our van options</h2>
      <div className={styles.filters}>
        <div onClick={() => setSearchParams({type: "simple"})} className={filterClassName("simple")}>simple</div>
        <div onClick={() => setSearchParams({type: "luxury"})} className={filterClassName("luxury")}>luxury</div>
        <div onClick={() => setSearchParams({type: "rugged"})} className={filterClassName("rugged")}>rugged</div>
        {typeFilter && <div onClick={() => setSearchParams({})} className={styles.clear}>Clear filters</div>}
      </div>
      <ul className={styles.vans_list}>{vansList}</ul>
    </div>
  )
}