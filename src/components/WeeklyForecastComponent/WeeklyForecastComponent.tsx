// @ts-nocheck
import DayOfTheWeekComponent from '../DayOfTheWeek/DayOfTheWeekComponent'

import { useState, useEffect } from 'react'
import s from './WeeklyForecast.module.css'

export default function WeeklyForecastComponent() {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const response = await fetch('forecast.json')
      await new Promise(resolve => setTimeout(resolve, 100))
      const data = await response.json()
      setData(data)
      setIsLoading(false)
    }

    fetchData()
  }, [])

  function renderForecast() {
    return (
      <section className={s.weeklyForecastContainer}>
        <h2 className={s.weeklyForecastContainer__location}>Location: {data?.location?.name}</h2>
        <p>Next 5 days forecast</p>
        <div className={s.daysContainer}>
          {data?.forecast?.forecastday.map((day) => {
            return (
              <DayOfTheWeekComponent key={day.date} data={day} />
            )
          })}
        </div>
      </section>
    )
  }

  //pesquisar sobre o ?.
  //criar um componente para o Loading...
  return (
    <section>
      {isLoading ? <p>Loading...</p> : renderForecast()}
    </section>
  )
}