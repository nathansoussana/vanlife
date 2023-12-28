import { Link } from 'react-router-dom'
import styles from './About.module.sass'

export default function About() {
  return (
    <div className={styles.content_container}>
      <img src="about_hero.webp" alt="" className={styles.img} />
      <h2 className={styles.title}>
        Don’t squeeze in a sedan when you could relax in a van.
      </h2>
      <p className={styles.text}>
      Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
      <br />
      (Hitch costs extra 😉)
      <br /><br />
      Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
      </p>

      <div className={styles.featured}>
        <h3 className={styles.featured_title}>
          Your destination is waiting.
          <br />
          Your van is ready.
        </h3>
        <Link to="/vans" className="btn btn_small btn_black">
          Explore our vans
        </Link>
      </div>
    </div>
  )
}