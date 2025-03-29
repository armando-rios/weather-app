import { TodayCard } from './TodayCard.js';

export const TodaySection = data => {
  const container = document.createElement('div');
  container.className =
    'flex flex-col items-center bg-white justify-center p-4 items-start border border-gray-200 rounded-xl';

  const title = document.createElement('h3');
  title.className = 'text-xl font-semibold mb-2';
  title.innerText = "Today's Highlight";

  const weatherData = document.createElement('div');
  weatherData.className = 'flex items-center gap-4';

  const feelsLike = TodayCard('Feels Like', data.temp);
  const humidity = TodayCard('Humidity', data.humidity + '%');
  const visibility = TodayCard('Visibility', data.visibility + ' km');
  const wind = TodayCard('Wind', data.windspeed + ' km/h');
  const sunrise = TodayCard('Sunrise', data.sunrise);

  weatherData.append(...[feelsLike, humidity, visibility, wind, sunrise]);

  container.append(...[title, weatherData]);

  return container;
};
