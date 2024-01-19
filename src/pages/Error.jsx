import Button from '../components/ui-elements/Button'
import styles from './Error.module.sass'

export default function Error() {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Sorry, the page you were looking for was not found.</h2>
      <Button backgroundColor="black" url="/" text="Return to home"/>
    </div>
  )
}