// @ts-nocheck
import s from './HourlyForecast.module.css'

export default function HourlyForecastComponent({ data }) {
  return (
    <div className={s.dayOfTheWeekContainer}>      
      <ul className={s.dayOfTheWeek__list}>
        <li>{data.time}</li>
      </ul>
    </div>
  )
} 