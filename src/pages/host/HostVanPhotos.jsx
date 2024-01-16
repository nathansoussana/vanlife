import { useOutletContext } from 'react-router-dom'
import styles from './HostVanPhotos.module.sass'

export default function HostVanPhotos() {
  const { van } = useOutletContext()
  
  return (
    <>
      { van && (
        <img src={van.imageUrl} alt={van.name} className={styles.van_image} />
      )}
    </>
  )
}