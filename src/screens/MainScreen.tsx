import DailyForecastComponent from '../components/DailyForecast/DailyForecastComponent'
import WeeklyForecastComponent from '../components/WeeklyForecastComponent/WeeklyForecastComponent'
import s from './MainScreen.module.css'

function MainScreen() {
  return (
    <div className={s.mainScreen}>
      <DailyForecastComponent />
      <WeeklyForecastComponent />
    </div>
    
  )
}

export default MainScreen
