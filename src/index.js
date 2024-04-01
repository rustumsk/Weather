import './styles.scss'
async function getWeather (city) {
  const stats = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=2571b4f6c98345b38ce75524242503&q=${city}&days=1&aqi=yes&alerts=yes`,{
    mode: 'cors'
  })
  const data = await stats.json()

  const current = data.current
  const forecast = data.forecast
  const location = data.location

  return [current.condition.text, location.region, current.temp_c, current.wind_kph]
}

const searchButton = document.querySelector('.ser').addEventListener('click', async () => {
  const input = document.querySelector('#city')
  const arr = await getWeather(input.value)

  const condition = document.querySelector('.w-text')
  condition.textContent = arr[0]

  const city = document.querySelector('.l-text')
  city.textContent = arr[1]

  const temp = document.querySelector('.te')
  temp.textContent = `${arr[2]}°C`

  const wind = document.querySelector('.w')
  wind.textContent = `${arr[3]}km/h`
})
