import { WeatherIcon } from './WeatherIcon.js';

export const HourlyForecast = data => {
  const hourlyContainer = document.createElement('div');

  hourlyContainer.className =
    'bg-surface border border-line rounded-lg px-5 py-5 flex flex-col gap-4 w-full';

  const title = document.createElement('h3');
  title.className = 'label-mono';
  title.innerText = 'Hourly Forecast';
  hourlyContainer.appendChild(title);

  const hours = data.hours;
  const horlyDataContainer = document.createElement('div');
  horlyDataContainer.className =
    'flex gap-4 overflow-x-auto pb-2 -mx-1 px-1 max-w-full';

  hours.forEach(hour => {
    const { datetime, icon, temp, conditions } = hour;

    const hourContainer = document.createElement('div');
    hourContainer.className =
      'flex flex-col items-center gap-2 min-w-[88px] px-2 py-2 rounded-md hover:bg-canvas transition-colors';

    const iconCondition = icon;
    const weatherIcon = WeatherIcon(iconCondition, {
      strokeWidth: 1.5,
      color: 'var(--color-ink)',
    });

    const hourText = document.createElement('p');

    const hourValue = parseInt(datetime.split(':')[0]);

    const date = new Date();
    date.setHours(hourValue);
    date.setMinutes(0);

    const formattedTime = date.toLocaleString('en-US', {
      hour: 'numeric',
      hour12: true,
    });

    hourText.className =
      'font-mono text-[11px] uppercase tracking-wider text-ink-soft';
    hourText.textContent = formattedTime;

    const tempData = document.createElement('p');
    tempData.className =
      'text-lg font-normal tracking-tight text-ink tabular-nums';
    tempData.textContent = `${temp}°C`;

    const condition = document.createElement('p');
    condition.className =
      'text-[11px] text-ink-soft font-mono uppercase tracking-wider text-center max-w-[88px]';
    condition.innerText = conditions;

    hourContainer.append(...[hourText, weatherIcon, tempData, condition]);
    horlyDataContainer.appendChild(hourContainer);
  });

  hourlyContainer.appendChild(horlyDataContainer);

  return hourlyContainer;
};
