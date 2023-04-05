// @ts-nocheck
//import forecast from '../../api/forecast.json'
import axios from 'axios'
import { useState, useEffect } from 'react'
import s from './DailyForecast.module.css'
import { render } from '@testing-library/react'

/* const DAILY = {
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
} */

export default function DailyForecastComponent() {
  const key = process.env.REACT_APP_API_KEY
  const [weatherData, setWeatherData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${key}&q=London&aqi=no`
      )

      console.log(data)
      setWeatherData(data)
    }
    fetchData()
  }, [])

  function renderList() {
    if(weatherData) {
      return (
        <ul className={s.itemsContainer}>
          <li>{weatherData.location.country}</li>
          <li>{weatherData.current.condition.text}</li>
        </ul>
      )
    }
  }

  return (
    <section className={s.section}>
      <img src={weatherData?.current.condition.icon} alt='ícone' />
      {renderList()}
    </section>
  )

}