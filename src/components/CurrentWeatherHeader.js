import { WeatherIcon } from './WeatherIcon.js';

export const CurrentWeatherHeader = (resolvedAddress, currentConditions) => {
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
};
