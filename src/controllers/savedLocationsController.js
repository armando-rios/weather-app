import { getSavedLocations } from '../utils/storage.js';
import { SavedLocations } from '../components/SavedLocations.js';

export const initSavedLocationsController = () => {
  const savedLocations = getSavedLocations();
  SavedLocations(savedLocations);
};
