import styles from './SpinnerCicle.module.css';

export function SpinnerCircle() {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}/>
    </div>
  )
}