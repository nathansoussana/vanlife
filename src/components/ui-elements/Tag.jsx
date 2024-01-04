import styles from './Tag.module.sass'

export default function Tag({ name }) {
  return (
    <div className={`${styles.tag} ${styles[name]}`}>
      {name}
    </div>
  );
}