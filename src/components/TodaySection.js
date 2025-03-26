import { TodayCard } from './TodayCard.js';

export const TodaySection = data => {
  const container = document.createElement('div');
  container.className =
    'flex flex-col items-center bg-white justify-center p-4 items-start border border-gray-200 rounded-xl';

  const title = document.createElement('h3');
  title.className = 'text-xl font-semibold mb-2';
  title.innerText = "Today's Highlight";

  const weatherData = document.createElement('div');
  weatherData.className = 'flex items-center';

  const box = TodayCard('Feels Like', data.temp);

  weatherData.append(box);

  container.append(...[title, weatherData]);

  return container;
};
