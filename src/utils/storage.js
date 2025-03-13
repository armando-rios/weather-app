export const saveLocation = (location) => {
  const locationArray = location.split(",")
  const savedLocations = JSON.parse(localStorage.getItem("savedLocations")) || []
  if (savedLocations.includes(locationArray[0])) {
    return savedLocations
  }
  savedLocations.push(locationArray[0])
  localStorage.setItem("savedLocations", JSON.stringify(savedLocations))
  return savedLocations
}

export const getSavedLocations = () => {
  return JSON.parse(localStorage.getItem("savedLocations")) || []
}
