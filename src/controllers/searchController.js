import { apiPromise, getWeather } from '../api/weatherService.js';
import { saveLocation } from '../utils/storage.js';
import { SavedLocations } from '../components/SavedLocations.js';
import { renderWeather } from '../views/renderWeather.js';
import { apiPromise, apiData } from '../api/weatherService.js';

export const initSearchController = () => {
  const searchForm = document.getElementById('search-form');
  const searchInput = document.getElementById('search-input');

  searchForm.addEventListener('submit', async e => {
    e.preventDefault();
    apiPromise = null;
    apiData = null;

    const value = await getWeather(searchInput.value);

    const { resolvedAddress } = value;

    const savedLocations = saveLocation(resolvedAddress);
    renderWeather(value);
    SavedLocations(savedLocations);
    searchInput.value = '';
  });
};
