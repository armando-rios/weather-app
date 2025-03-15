import { getWeather } from '../api/weatherService.js';
import { SavedLocations } from '../components/SavedLocations.js';
import { saveLocation } from '../utils/storage.js';
import { WeatherIcon } from '../components/WeatherIcon.js';

export const renderWeather = async value => {
  try {
    const data = await getWeather(value);
    console.log(data);
    const { resolvedAddress, currentConditions } = data;

    const savedLocations = saveLocation(resolvedAddress);
    SavedLocations(savedLocations);

    const currentLocation = document.getElementById('current-location');
    const currentTemp = document.getElementById('current-temp');
    const currentCondition = document.getElementById('current-condition');

    currentLocation.textContent = resolvedAddress;
    currentTemp.className = 'flex gap-2 text-3xl font-bold items-center';
    currentTemp.innerHTML = '';
    const tempSpan = document.createElement('span');
    tempSpan.textContent = `${currentConditions.temp}°C`;
    const icon = WeatherIcon(currentConditions.icon);
    currentTemp.appendChild(icon);
    currentTemp.appendChild(tempSpan);
    currentCondition.textContent = currentConditions.conditions;
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
