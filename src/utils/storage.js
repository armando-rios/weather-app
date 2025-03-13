export const saveLocation = (location) => {
  const savedLocations = JSON.parse(localStorage.getItem("savedLocations")) || []
  if (savedLocations.includes(location)) {
    return
  }
  savedLocations.push(location)
  localStorage.setItem("savedLocations", JSON.stringify(savedLocations))
}

export const getSavedLocations = () => {
  return JSON.parse(localStorage.getItem("savedLocations")) || []
}
