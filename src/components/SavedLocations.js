import { Location } from './Location.js';

const savedLocationsContainer = document.getElementById('saved-locations');

export const SavedLocations = (savedLocations, mode = 'add') => {
  if (!savedLocations || savedLocations.length === 0) {
    const emptyMessage = document.createElement('p');
    emptyMessage.className =
      'text-center text-muted font-mono text-xs uppercase tracking-widest p-4';
    emptyMessage.innerText = 'No saved locations';
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
