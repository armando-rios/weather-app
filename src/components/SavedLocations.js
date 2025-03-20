import { Location } from './Location.js';

const savedLocationsContainer = document.getElementById('saved-locations');

export const SavedLocations = (savedLocations, mode = 'add') => {
  // savedLocationsContainer.innerHTML = '';

  if (!savedLocations || savedLocations.length === 0) {
    const emptyMessage = document.createElement('p');
    emptyMessage.className = 'text-center text-gray-500 p-4';
    emptyMessage.innerText = 'No hay ubicaciones guardadas';
    savedLocationsContainer.appendChild(emptyMessage);
    return;
  }

  if (mode === 'init') {
    savedLocationsContainer.innerHTML = '';
    savedLocations.forEach(location => {
      const locationComponent = Location(location);
      savedLocationsContainer.appendChild(locationComponent);
    });
  } else {
    if (savedLocations.length === 1) {
      savedLocationsContainer.innerHTML = '';
    }
    const locationComponent = Location(
      savedLocations[savedLocations.length - 1]
    );
    savedLocationsContainer.appendChild(locationComponent);
  }
};
