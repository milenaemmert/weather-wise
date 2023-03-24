import loading from '../../assets/icons/loading.svg'
import s from './LoadingComponent.module.css'

export default function Loading() {
  return (
    <div className={s.loaderContainer}>
      <img src={loading} alt='Loading' className={s.loader} />
    </div>
  )
}