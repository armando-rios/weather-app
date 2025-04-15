import { WeatherIcon } from './WeatherIcon.js';
import { TodaySection } from './TodaySection.js';
import { WeeklyForecast } from './WeeklyForecast.js';

export const ForecastSection = data => {
  const mainContent = document.getElementById('main-content');

  mainContent.innerHTML = '';

  const { days } = data;
  console.log(days);

  const today = days.shift();

  mainContent.append(TodaySection(today));

  mainContent.append(WeeklyForecast(days));
};
