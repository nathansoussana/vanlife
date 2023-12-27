import styles from './Home.module.sass'

export default function Home() {
  return (
    <div className={styles.content_container}>
      <h1 className={styles.title}>
        You got the travel plans, we got the travel vans.
      </h1>
      <p className={styles.text}>
        Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.
      </p>
      <a href="#" className="btn btn_orange">
        Find your van
      </a>
    </div>
  )
}