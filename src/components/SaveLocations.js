const savedLocationsContainer = document.getElementById("saved-locations")
export const SaveLocations = (savedLocations) => {
  savedLocationsContainer.innerHTML = ""
  savedLocations.forEach((location) => {
    const locationButton = document.createElement("button")
    locationButton.innerText = location
    savedLocationsContainer.appendChild(locationButton)
  })
}
