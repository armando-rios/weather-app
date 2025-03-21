import { getWeather } from '../api/weatherService.js';
import { SavedLocations } from '../components/SavedLocations.js';
import { saveLocation } from '../utils/storage.js';
import { CurrentWeatherHeader } from '../components/CurrentWeatherHeader.js';
import { ForecastSection } from '../components/ForecastSection.js';

export const renderWeather = async value => {
  try {
    const data = await getWeather(value);
    console.log(data);
    const { resolvedAddress, currentConditions } = data;

    const savedLocations = saveLocation(resolvedAddress);
    SavedLocations(savedLocations);
    CurrentWeatherHeader(resolvedAddress, currentConditions);
    ForecastSection(data);
  } catch (error) {
    const messages = document.getElementById('messages');
    messages.classList.remove('hidden');
    messages.classList.add('bg-red-500');
    messages.textContent = 'Invalid location';
    setTimeout(() => {
      messages.classList.add('hidden');
      messages.classList.remove('bg-red-500');
      messages.textContent = '';
    }, 4000);
  }
};
