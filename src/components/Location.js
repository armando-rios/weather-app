import { renderWeather } from '../views/renderWeather.js';
import { getWeather } from '../api/weatherService.js';
import { WeatherIcon } from './WeatherIcon.js';

export const Location = locationName => {
  const locationButton = document.createElement('button');
  locationButton.className =
    'p-2 w-full flex justify-between items-center hover:bg-gray-100 rounded-md transition-colors';

  const nameContainer = document.createElement('div');
  nameContainer.className = 'flex flex-col text-start';

  const name = document.createElement('p');
  name.className = 'font-medium text-left';
  name.innerText = locationName.slice(0, 20);
  nameContainer.appendChild(name);

  const weatherContainer = document.createElement('div');
  weatherContainer.className = 'flex items-center';

  const loadingText = document.createElement('span');
  loadingText.className = 'text-xs text-gray-500';
  loadingText.innerText = 'Cargando...';
  nameContainer.appendChild(loadingText);

  locationButton.append(nameContainer, weatherContainer);

  const fetchWeatherData = async () => {
    try {
      const weatherData = await getWeather(locationName);

      if (weatherData.currentConditions?.conditions) {
        loadingText.innerText = weatherData.currentConditions.conditions;
      } else {
        nameContainer.removeChild(loadingText);
      }

      if (weatherData.currentConditions?.icon) {
        const iconCondition = weatherData.currentConditions.icon;
        const weatherIcon = WeatherIcon(iconCondition);
        weatherContainer.appendChild(weatherIcon);
      }

      if (weatherData.currentConditions?.temp !== undefined) {
        const tempSpan = document.createElement('span');
        tempSpan.className = 'ml-2 font-semibold';
        tempSpan.innerText = `${Math.round(weatherData.currentConditions.temp)}°`;
        weatherContainer.appendChild(tempSpan);
      }
    } catch (error) {
      console.error(
        'Error al obtener datos del clima para',
        locationName,
        ':',
        error
      );
      loadingText.innerText = 'Error al cargar datos';
      loadingText.className = 'text-xs text-red-500';
    }
  };

  fetchWeatherData();

  locationButton.addEventListener('click', () => {
    try {
      renderWeather(locationName);
    } catch (error) {
      console.error('Error al cargar el clima para', locationName, ':', error);
    }
  });

  return locationButton;
};
