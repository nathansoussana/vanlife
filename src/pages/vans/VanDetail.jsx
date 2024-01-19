import { useState, useEffect } from "react"
import { useParams, Link, useLocation } from "react-router-dom"
import Tag from '../../components/ui-elements/Tag'
import Button from '../../components/ui-elements/Button'
import styles from './VanDetail.module.sass'

export default function VanDetail() {
    const [van, setVan] = useState(null)
    const params = useParams()
    const location = useLocation().state.search
    console.log(location)
   
    useEffect(() => {
      fetch(`/api/vans/${params.id}`)
        .then(res => res.json())
        .then(data => setVan(data.vans))
    }, [params.id])

    return (
      <div className={styles.container}>

        {/* Back to all vans */}
        <Link to={location ? `..?${location}` : ".."} relative="path">
          <span className={styles.back_arrow}>&larr;</span>
          <span className={styles.back_link}>Back to {location ? van && van.type : "all"} vans</span>
        </Link>

        {/* Van detail */}
        {van && (
          <div className={styles.content_container}>
            <img className={styles.van_img} src={van.imageUrl} alt={van.name} />
            <Tag name={van.type} />
            <h2 className={styles.van_name}>{van.name}</h2>
            <h3 className={styles.van_price}>${van.price}<span>/day</span></h3>
            <p className={styles.van_description}>{van.description}</p>
            <Button backgroundColor="orange" url="#" text="Rent this van" />
          </div>
        )}
        
      </div>
    )
}