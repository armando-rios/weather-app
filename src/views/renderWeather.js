import { getWeather } from "../api/weatherService.js"

export const renderWeather = async (value) => {

  const data = await getWeather(value)
  console.log(data)
  const {
    resolvedAddress,
    currentConditions,
  } = data

  const currentLocation = document.getElementById("current-location")
  const currentTemp = document.getElementById("current-temp")
  const currentCondition = document.getElementById("current-condition")

  currentLocation.textContent = resolvedAddress
  currentTemp.textContent = currentConditions.temp + "°"
  currentCondition.textContent = currentConditions.conditions
}
