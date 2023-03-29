import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MAIN_ROUTE, HOURLY_ROUTE } from './contants/routes'
import MainScreen from './screens/MainScreen'
import HourlyForecastScreen from './screens/HourlyForecast/HourlyForecastScreen'
import './assets/base/global.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <BrowserRouter>
    <Routes>
      <Route path={MAIN_ROUTE} element={<MainScreen />} />
      <Route path={HOURLY_ROUTE} element={<HourlyForecastScreen />} />
    </Routes>
  </BrowserRouter>
)