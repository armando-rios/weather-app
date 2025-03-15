import { renderWeather } from '../views/renderWeather.js';
import { WeatherIcon } from './WeatherIcon.js';

export const Location = (locationName, weatherData) => {
  const locationButton = document.createElement('button');
  locationButton.className =
    'p-2 w-full flex justify-between items-center hover:bg-gray-100 rounded-md transition-colors';

  const nameContainer = document.createElement('div');
  nameContainer.className = 'flex flex-col text-start';

  const name = document.createElement('p');
  name.className = 'font-medium text-left';
  name.innerText = locationName.slice(0, 20);

  nameContainer.appendChild(name);

  if (weatherData.currentConditions.conditions) {
    const conditionText = document.createElement('span');
    conditionText.className = 'text-xs text-gray-500';
    conditionText.innerText = weatherData.currentConditions.conditions;
    nameContainer.appendChild(conditionText);
  }

  const weatherContainer = document.createElement('div');
  weatherContainer.className = 'flex items-center';

  const iconCondition = weatherData.currentConditions.icon;
  const weatherIcon = WeatherIcon(iconCondition);
  weatherContainer.appendChild(weatherIcon);

  if (weatherData.currentConditions.temp !== undefined) {
    const tempSpan = document.createElement('span');
    tempSpan.className = 'ml-2 font-semibold';
    tempSpan.innerText = `${Math.round(weatherData.currentConditions.temp)}°`;
    weatherContainer.appendChild(tempSpan);
  }

  locationButton.addEventListener('click', () => {
    renderWeather(locationName);
  });

  locationButton.append(nameContainer, weatherContainer);

  return locationButton;
};
