// @ts-nocheck
import forecast from '../../api/forecast.json'
import s from './DailyForecast.module.css'

const DAILY = {
  ICON: { ALT: 'Icon representing the current weather condition.', REFERENCE: forecast.current.condition.icon },
  ITEMS: [
    { LABEL: 'Location', REFERENCE: forecast.location.name },
    { LABEL: 'Temperature', REFERENCE: forecast.current.temp_c },
    { LABEL: 'Condition', REFERENCE: forecast.current.condition.text },
    { LABEL: 'Humidity', REFERENCE: forecast.current.humidity },
    { LABEL: 'Wind', REFERENCE: forecast.current.wind_kph },
    { LABEL: 'Visibility', REFERENCE: forecast.current.vis_km },
    { LABEL: 'Pressure', REFERENCE: forecast.current.pressure_mb },
    { LABEL: 'Last updated', REFERENCE: forecast.current.last_updated }
  ]
}

export default function DailyForecastComponent() {
  return (
    <section className={s.section}>
      <img src={DAILY.ICON.REFERENCE} alt={DAILY.ICON.ALT} />

      <ul className={s.itemsContainer}>
        {DAILY.ITEMS.map((item) => {
          return <li key={item.LABEL} className={s.item}>{item.LABEL}: {item.REFERENCE}</li>
        })}
      </ul>
    </section>
  )
}