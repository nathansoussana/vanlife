import { useOutletContext } from 'react-router-dom'
import styles from './HostVanInfo.module.sass'

export default function HostVanInfo() {
  const { van } = useOutletContext()

  return (
    <>
      { van && (
        <div className={styles.van_details}>
          <p className={styles.paragraph}>
            <span className={styles.subtitle}>Name:</span> {van.name}
          </p>
          <p className={styles.paragraph}>
            <span className={styles.subtitle}>Category:</span> {van.type}
          </p>
          <p className={styles.paragraph}>
            <span className={styles.subtitle}>Description:</span> {van.description}
          </p>
          <p className={styles.paragraph}>
            <span className={styles.subtitle}>Visibility:</span> Public
          </p>
        </div>
      )}
    </>
  )
}