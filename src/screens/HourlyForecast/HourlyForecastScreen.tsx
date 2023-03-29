// @ts-nocheck
import useForecast from '../../hooks/useForecast'
import Loading from '../../components/Loading/LoadingComponent'
import HourlyForecastComponent from '../../components/HourlyForecastComponent/HourlyForecastComponent'
import s from './HourlyForecast.module.css'

//forecast{} - forecastday[]{} - hour[]{} - time

export default function HourlyForecastScreen() {
  const { data, isLoading } = useForecast()

  function renderForecast() {
    return (
      <section className={s.weeklyForecastContainer}>
        <h2 className={s.weeklyForecastContainer__location}>Date: {data?.forecast?.forecastday[0].date}</h2>

        <div className={s.daysContainer}>
          {data.forecast?.forecastday[0].hour.map((hour, index) => {
            return <HourlyForecastComponent key={index} data={hour} />
          })}
        </div>
      </section>
    )
  }

  return isLoading ? <Loading /> : renderForecast()
}