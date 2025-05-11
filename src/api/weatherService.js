const API_KEY = process.env.WEATHER_API;

const searchCache = new Map();

export const getWeather = async (place = 'Tarija') => {
  if (!place.trim()) return [];
  if (searchCache.has(place)) {
    console.log('Using cache for: ', place);
    return searchCache.get(place);
  }

  console.log('Getting request for:', place);

  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}?unitGroup=metric&key=${API_KEY}`
    );
    const data = await response.json();
    searchCache.set(place, data);
    return data;
  } catch (error) {
    return error;
  }
};
