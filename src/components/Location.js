import { renderWeather } from '../views/renderWeather.js';
import { getWeather } from '../api/weatherService.js';
import { WeatherIcon } from './WeatherIcon.js';

export const Location = locationName => {
  const locationButton = document.createElement('button');
  locationButton.className =
    'w-full flex items-center justify-between gap-3 px-2 py-2.5 hover:bg-canvas transition-colors duration-150 rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-canvas';

  const nameContainer = document.createElement('div');
  nameContainer.className = 'flex flex-col text-start gap-0.5 min-w-0';

  const name = document.createElement('p');
  name.className = 'font-medium text-sm text-ink text-left truncate';
  name.innerText = locationName.slice(0, 20);
  nameContainer.appendChild(name);

  const weatherContainer = document.createElement('div');
  weatherContainer.className = 'flex items-center gap-2 shrink-0';

  const loadingText = document.createElement('span');
  loadingText.className =
    'text-xs text-muted font-mono uppercase tracking-wider';
  loadingText.innerText = 'Loading…';
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
        tempSpan.className = 'font-medium text-sm text-ink tabular-nums';
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
