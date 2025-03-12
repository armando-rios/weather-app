import "./index.css"
const API_KEY = process.env.WEATHER_API

const searchForm = document.querySelector('#search-form')
const searchInput = document.querySelector('#search-input')

const mainContent = document.querySelector("#main-content")

searchForm.addEventListener("submit", async (e) => {
  e.preventDefault()
  const data = await getWeather(searchInput.value)
  renderWeather(data)
})


const getWeather = async (place) => {
  try {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}?unitGroup=metric&key=${API_KEY}`)
    const data = await response.json()
    return data
  }
  catch (error) {
    console.log(error)
    return error
  }
}

const renderWeather = (data) => {
  const time = new Date()
  console.log(data)
  mainContent.innerHTML = ""
  mainContent.innerHTML = `
    <div>${data.resolvedAddress}</div>
    <div>${data.description}</div>
    <div>${data.currentConditions.temp}</div>
  `
}
