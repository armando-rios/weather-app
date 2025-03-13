import { getWeather } from "../api/weatherService.js"
const savedLocationsContainer = document.getElementById("saved-locations")
export const SavedLocations = (savedLocations) => {
  savedLocationsContainer.innerHTML = ""
  savedLocations.forEach(async (location) => {
    const data = await getWeather(location)
    console.log(data)
    const locationButton = document.createElement("button")
    locationButton.className = "p-2 w-full flex justify-between"

    const locationName = document.createElement("p")
    locationName.innerText = location.slice(0, 20)
    const locationTemp = document.createElement("p")
    locationTemp.innerText = data.currentConditions.temp
    locationButton.append(...[locationName, locationTemp])
    savedLocationsContainer.appendChild(locationButton)
  })
}
