import { Location } from './Location.js';
import { getWeather } from '../api/weatherService.js';

const savedLocationsContainer = document.getElementById('saved-locations');

export const SavedLocations = savedLocations => {
  savedLocationsContainer.innerHTML = '';

  if (!savedLocations || savedLocations.length === 0) {
    const emptyMessage = document.createElement('p');
    emptyMessage.className = 'text-center text-gray-500 p-4';
    emptyMessage.innerText = 'No hay ubicaciones guardadas';
    savedLocationsContainer.appendChild(emptyMessage);
    return;
  }

  savedLocations.forEach(async location => {
    try {
      const weatherData = await getWeather(location);

      const locationComponent = Location(location, weatherData);
      savedLocationsContainer.appendChild(locationComponent);
    } catch (error) {
      console.error('Error al cargar el clima para', location, ':', error);

      // Componente de error
      const errorComponent = document.createElement('div');
      errorComponent.className = 'p-2 w-full text-red-500';
      errorComponent.innerText = `Error al cargar ${location}`;
      savedLocationsContainer.appendChild(errorComponent);
    }
  });
};
