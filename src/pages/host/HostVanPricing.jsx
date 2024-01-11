import { useOutletContext } from 'react-router-dom'
import styles from './HostVanPricing.module.sass'

export default function HostVanPricing() {
  const [van, setVan] = useOutletContext()

  return (
    <p className={styles.paragraph}>
      <span className={styles.price}>${van.price}.00</span>/day
    </p>
  )
}