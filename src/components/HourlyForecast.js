import { WeatherIcon } from './WeatherIcon.js';

export const HourlyForecast = data => {
  const hourlyContainer = document.createElement('div');

  hourlyContainer.className =
    'flex flex-col h-48 overflow-auto items-center bg-white p-4 items-start border border-gray-200 rounded-xl';

  const title = document.createElement('h3');
  title.className = 'text-xl font-semibold mb-2';
  title.innerText = 'Hourly Forecast';
  hourlyContainer.appendChild(title);

  const hours = data.hours;

  return hourlyContainer;
};
