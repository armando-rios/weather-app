import { WeatherIcon } from './WeatherIcon.js';

export const WeeklyForecast = days => {
  const weaklyContainer = document.createElement('div');
  weaklyContainer.className =
    'flex flex-col items-center bg-white justify-center p-4 items-start border border-gray-200 rounded-xl';

  days.forEach(day => {
    const { datetime, icon, temp, conditions } = day;

    const dayContainer = document.createElement('div');
    dayContainer.className = 'flex flex-col items-center justify-center p-4';

    const date = document.createElement('p');
    date.className = 'text-sm text-gray-500';
    date.innerText = datetime;

    const weatherContainer = document.createElement('div');
    weatherContainer.className = 'flex items-center';

    const iconCondition = icon;
    const weatherIcon = WeatherIcon(iconCondition);
    weatherContainer.appendChild(weatherIcon);

    const tempSpan = document.createElement('span');
    tempSpan.className = 'ml-2 font-semibold';
    tempSpan.innerText = `${Math.round(temp)}°`;

    dayContainer.appendChild(date);
    dayContainer.appendChild(weatherContainer);
    dayContainer.appendChild(tempSpan);

    weaklyContainer.appendChild(dayContainer);
  });

  return weaklyContainer;
};
