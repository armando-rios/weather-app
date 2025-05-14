import { WeatherIcon } from './WeatherIcon.js';

export const CurrentWeatherHeader = (resolvedAddress, currentConditions) => {
  const currentLocation = document.getElementById('current-location');
  const currentDate = document.getElementById('current-date');
  const currentTemp = document.getElementById('current-temp');
  const currentCondition = document.getElementById('current-condition');

  currentLocation.textContent = resolvedAddress;
  currentDate.textContent = new Date().toString();
  currentTemp.className =
    'flex gap-3 items-center text-4xl font-light tracking-tighter text-ink';
  currentTemp.innerHTML = '';
  const icon = WeatherIcon(currentConditions.icon, {
    size: 28,
    strokeWidth: 1.5,
    color: 'var(--color-ink)',
  });
  const tempSpan = document.createElement('span');
  tempSpan.className = 'tabular-nums';
  tempSpan.textContent = `${currentConditions.temp}°C`;
  currentTemp.appendChild(icon);
  currentTemp.appendChild(tempSpan);
  currentCondition.textContent = currentConditions.conditions;
};
