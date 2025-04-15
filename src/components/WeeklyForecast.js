import { WeatherIcon } from './WeatherIcon.js';

export const WeeklyForecast = days => {
  const weaklyContainer = document.createElement('div');
  weaklyContainer.className =
    'flex flex-col h-80 overflow-auto items-center bg-white p-4 items-start border border-gray-200 rounded-xl';

  days.forEach(day => {
    console.log(day);
    const { datetime, icon, temp, conditions } = day;

    const dayContainer = document.createElement('div');
    dayContainer.className = 'grid grid-cols-6 p-4 gap-2 w-full';

    const date = document.createElement('p');
    date.className = 'text-sm text-gray-500';
    date.innerText = datetime;

    const weatherContainer = document.createElement('div');
    weatherContainer.className = 'flex gap-2';

    const iconCondition = icon;
    const weatherIcon = WeatherIcon(iconCondition);

    const condition = document.createElement('p');
    condition.className = 'text-sm text-gray-500';
    condition.innerText = conditions;

    weatherContainer.append(...[weatherIcon, condition]);

    const tempSpan = document.createElement('span');
    tempSpan.className = 'ml-2 font-semibold';
    tempSpan.innerText = `${Math.round(temp)}°`;

    dayContainer.appendChild(date);
    dayContainer.appendChild(weatherContainer);
    // dayContainer.appendChild(condition);
    dayContainer.appendChild(tempSpan);

    weaklyContainer.appendChild(dayContainer);
  });

  return weaklyContainer;
};
