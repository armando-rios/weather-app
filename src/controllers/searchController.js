import { getWeather } from '../api/weatherService.js';
import { saveLocation } from '../utils/storage.js';
import { SavedLocations } from '../components/SavedLocations.js';
import { renderWeather } from '../views/renderWeather.js';

export const initSearchController = () => {
  const searchForm = document.getElementById('search-form');
  const searchInput = document.getElementById('search-input');

  searchForm.addEventListener('submit', async e => {
    e.preventDefault();

    const value = await getWeather(searchInput.value);

    const { resolvedAddress, currentConditions } = value;

    const savedLocations = saveLocation(resolvedAddress);
    renderWeather(searchInput.value);
    SavedLocations(savedLocations);
    searchInput.value = '';
  });
};
