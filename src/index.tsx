import ReactDOM from 'react-dom/client'
import MainScreen from './screens/MainScreen'
import './assets/base/global.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <MainScreen />
);