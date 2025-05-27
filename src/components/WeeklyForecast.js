import { WeatherIcon } from './WeatherIcon.js';

export const WeeklyForecast = days => {
  const weaklyContainer = document.createElement('div');
  weaklyContainer.className =
    'bg-surface border border-line rounded-lg w-full flex flex-col min-h-[260px] max-h-[420px] min-w-0';

  const title = document.createElement('h3');
  title.className = 'label-mono px-4 py-3';
  title.innerText = 'Weekly Forecast';
  weaklyContainer.appendChild(title);

  const listContainer = document.createElement('div');
  listContainer.className =
    'flex flex-col divide-y divide-line overflow-y-auto min-h-0 max-h-[280px] sm:max-h-[320px] xl:max-h-[360px]';

  days.forEach(day => {
    const { datetime, icon, temp, conditions } = day;

    let weekDay = new Date(datetime).toLocaleString('en-EN', {
      weekday: 'long',
    });

    weekDay = weekDay.charAt(0).toUpperCase() + weekDay.slice(1);

    const dayContainer = document.createElement('div');
    dayContainer.className =
      'w-full grid grid-cols-[1fr_auto_auto] items-center gap-4 px-3 py-2.5 hover:bg-canvas transition-colors rounded-md';

    const date = document.createElement('p');
    date.className = 'text-sm text-ink font-medium';
    date.innerText = weekDay;

    const weatherContainer = document.createElement('div');
    weatherContainer.className =
      'flex items-center gap-2 min-w-0 max-sm:hidden';

    const iconCondition = icon;
    const weatherIcon = WeatherIcon(iconCondition, {
      strokeWidth: 1.5,
      color: 'var(--color-ink)',
    });

    const condition = document.createElement('p');
    condition.className =
      'text-xs text-ink-soft font-mono uppercase tracking-wider truncate';
    condition.innerText = conditions;

    weatherContainer.append(...[weatherIcon, condition]);

    const tempSpan = document.createElement('span');
    tempSpan.className = 'text-sm text-ink font-normal tabular-nums';
    tempSpan.innerText = `${Math.round(temp)}°`;

    dayContainer.appendChild(date);
    dayContainer.appendChild(weatherContainer);
    dayContainer.appendChild(tempSpan);

    listContainer.appendChild(dayContainer);
  });

  weaklyContainer.appendChild(listContainer);

  return weaklyContainer;
};
