import { getSavedLocations } from "../utils/storage.js"

export const initSaveLocationController = () => {
  const savedLocations = getSavedLocations()
  const savedLocationsContainer = document.getElementById("saved-locations")
  savedLocations.forEach((location) => {
    const locationButton = document.createElement("button")
    locationButton.innerText = location
    savedLocationsContainer.appendChild(locationButton)
  })
}
