import { WeatherIcon } from './WeatherIcon.js';

export const HourlyForecast = data => {
  const hourlyContainer = document.createElement('div');

  hourlyContainer.className =
    'flex flex-col  overflow-auto items-center bg-white p-4 items-start border border-gray-200 rounded-xl';

  const title = document.createElement('h3');
  title.className = 'text-xl font-semibold mb-2';
  title.innerText = 'Hourly Forecast';
  hourlyContainer.appendChild(title);

  const hours = data.hours;

  const horlyDataContainer = document.createElement('div');
  horlyDataContainer.className = 'flex gap-4 justify-center m-auto';

  const currentHour = new Date().getHours();

  hours.forEach(hour => {
    const { datetime, icon, temp, conditions } = hour;

    const hourContainer = document.createElement('div');
    hourContainer.className =
      'flex flex-col items-center gap-2 w-32 rounded-md';

    const iconCondition = icon;
    const weatherIcon = WeatherIcon(iconCondition);

    const hourText = document.createElement('p');

    const hourValue = parseInt(datetime.split(':')[0]);

    // let formattedTime = '';

    const date = new Date();
    date.setHours(hourValue);
    date.setMinutes(0);

    const formattedTime = date.toLocaleString('en-US', {
      hour: 'numeric',
      hour12: true,
    });

    hourText.className = 'text-lg text-blue-500 font-semibold text-center';
    hourText.textContent = formattedTime;

    const tempData = document.createElement('p');
    tempData.className = 'text-2xl text-center font-bold';
    tempData.textContent = `${temp}°C`;

    const condition = document.createElement('p');
    condition.className = 'text-sm text-gray-500';
    condition.innerText = conditions;

    hourContainer.append(...[hourText, weatherIcon, tempData, condition]);
    horlyDataContainer.appendChild(hourContainer);
  });

  hourlyContainer.appendChild(horlyDataContainer);

  return hourlyContainer;
};
