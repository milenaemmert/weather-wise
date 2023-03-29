import { useEffect, useState } from 'react'

export default function useForecast() {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const response = await fetch('forecast.json')
      await new Promise(resolve => setTimeout(resolve, 1000))
      const data = await response.json()
      setData(data)
      setIsLoading(false)
    }
  
    fetchData()
  }, [])

  return {
    data,
    isLoading
  }
}