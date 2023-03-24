// @ts-nocheck
import s from './DayOfTheWeek.module.css'

export default function DayOfTheWeekComponent({ data }) {
  return (
    <div className={s.dayOfTheWeekContainer}>
      <img src={data.day.condition.icon} alt='Icon representing the current weather condition.' className={s.dayOfTheWeek__icon} />
      
      <ul className={s.dayOfTheWeek__list}>
        <li>{data.date}</li>
        <li>Temperature: {data.day.avgtemp_c}</li>
        <li>Condition: {data.day.condition.text}</li>
        <li>Humidity: {data.day.avghumidity}</li>
        <li>Wind: {data.day.maxwind_kph}</li>
        <li>Precipitation: {data.day.totalprecip_mm}</li>
      </ul>
    </div>
  )
}