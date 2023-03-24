// @ts-nocheck
export default function DayOfTheWeekComponent({ data }) {
  return (
    <div>
      <img src={data.day.condition.icon} alt='Icon representing the current weather condition.' />
      
      <ul>
        <li>{data.date}</li>
        <li>Temperature: {data.avgtemp_c}</li>
        <li>Condition: {data.day.condition.text}</li>
        <li>Humidity: {data.avghumidity}</li>
        <li>Wind: {data.maxwind_kph}</li>
        <li>Precipitation: {data.totalprecip_mm}</li>
      </ul>
    </div>
  )
}