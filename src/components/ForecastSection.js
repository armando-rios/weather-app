import { WeatherIcon } from './WeatherIcon.js';
import { TodaySection } from './TodaySection.js';

export const ForecastSection = data => {
  // this component render the forecast of the all days
  const mainContent = document.getElementById('main-content');

  mainContent.innerHTML = '';

  const { days } = data;
  console.log(days);

  const today = days.shift();

  mainContent.append(TodaySection(today));

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

    mainContent.appendChild(dayContainer);
  });
};
