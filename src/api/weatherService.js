const API_KEY = process.env.WEATHER_API;

export const getWeather = async place => {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}?unitGroup=metric&key=${API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};
