import { getSavedLocations } from '../utils/storage.js';
import { SavedLocations } from '../components/SavedLocations.js';
import { renderWeather } from '../views/renderWeather.js';

export const initSavedLocationsController = () => {
  const savedLocations = getSavedLocations();
  SavedLocations(savedLocations, 'init');
  renderWeather(savedLocations[0]);
};
