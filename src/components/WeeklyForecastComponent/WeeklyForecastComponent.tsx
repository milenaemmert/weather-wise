// @ts-nocheck
import DayOfTheWeekComponent from '../DayOfTheWeek/DayOfTheWeekComponent'
import useForecast from '../../hooks/useForecast'
import Loading from '../Loading/LoadingComponent'
import s from './WeeklyForecast.module.css'

export default function WeeklyForecastComponent() {
  const { data, isLoading } = useForecast()

  function renderForecast() {
    return (
      <section className={s.weeklyForecastContainer}>
        <h2 className={s.weeklyForecastContainer__location}>Location: {data?.location?.name}</h2>
        <p>Next 5 days forecast</p>
        <div className={s.daysContainer}>
          {data.forecast?.forecastday?.map((day) => {
            return <DayOfTheWeekComponent key={day.date} data={day} />
          })}
        </div>
      </section>
    )
  }

  return isLoading ? <Loading /> : renderForecast()
}