import { TodayCard } from './TodayCard.js';

export const TodaySection = data => {
  const container = document.createElement('div');
  container.className =
    'bg-surface border border-line rounded-lg px-4 py-3 w-full flex flex-col gap-4 min-h-[180px] min-w-0';

  const title = document.createElement('h3');
  title.className = 'label-mono';
  title.innerText = "Today's Highlights";

  const weatherData = document.createElement('div');
  weatherData.className =
    'grid grid-cols-2 md:grid-cols-4 gap-3 w-full min-w-0';

  const feelsLike = TodayCard('Feels Like', data.temp);
  const humidity = TodayCard('Humidity', data.humidity + '%');
  const visibility = TodayCard('Visibility', data.visibility + ' km');
  const wind = TodayCard('Wind', data.windspeed + ' km/h');
  const sunrise = TodayCard('Sunrise', data.sunrise);
  const sunset = TodayCard('Sunset', data.sunset);
  const uv = TodayCard('Uv Index', data.uvindex);
  const pressure = TodayCard('Pressure', data.pressure + ' hPa');

  weatherData.append(
    ...[feelsLike, humidity, visibility, wind, sunrise, sunset, uv, pressure]
  );

  container.append(...[title, weatherData]);

  return container;
};
