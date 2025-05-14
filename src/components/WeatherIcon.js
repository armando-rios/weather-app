import {
  createElement,
  Cloud,
  CloudRain,
  CloudSnow,
  CloudFog,
  Sun,
  CloudLightning,
  CloudDrizzle,
  Wind,
  CloudSun,
  Droplets,
  Snowflake,
  Moon,
  CloudMoon,
} from 'lucide';

export const WeatherIcon = (condition, props = {}) => {
  const icon = condition ? condition.toLowerCase() : '';

  const colors = {
    rain: '#2c82c9', // Azul para lluvia
    storm: '#5c3566', // Púrpura para tormentas
    snow: '#95a5a6', // Gris claro para nieve
    fog: '#bdc3c7', // Gris muy claro para niebla
    sun: '#f39c12', // Amarillo/naranja para sol
    cloud: '#7f8c8d', // Gris para nubes
    wind: '#3498db', // Azul claro para viento
    moon: '#34495e', // Azul oscuro para noche
  };

  const { color, strokeWidth = 1.5, ...rest } = props;
  const finalColor = color ?? null;
  const mergedProps = { strokeWidth, ...rest };

  let iconElement;
  let iconColor;

  switch (icon) {
    // Lluvia
    case 'rain':
    case 'showers-rain':
    case 'rain-showers-day':
    case 'rain-showers-night':
      iconElement = createElement(CloudRain, mergedProps);
      iconColor = colors.rain;
      break;

    // Llovizna
    case 'drizzle':
      iconElement = createElement(CloudDrizzle, mergedProps);
      iconColor = colors.rain;
      break;

    // Tormentas
    case 'thunder-rain':
    case 'thunder-showers-day':
    case 'thunder-showers-night':
    case 'thunder':
      iconElement = createElement(CloudLightning, mergedProps);
      iconColor = colors.storm;
      break;

    // Nieve
    case 'snow':
    case 'snow-showers-day':
    case 'snow-showers-night':
    case 'sleet':
    case 'freezing-drizzle':
    case 'freezing-rain':
      iconElement = createElement(CloudSnow, mergedProps);
      iconColor = colors.snow;
      break;

    // Niebla
    case 'fog':
    case 'haze':
      iconElement = createElement(CloudFog, mergedProps);
      iconColor = colors.fog;
      break;

    // Viento
    case 'wind':
      iconElement = createElement(Wind, mergedProps);
      iconColor = colors.wind;
      break;

    // Despejado
    case 'clear-day':
      iconElement = createElement(Sun, mergedProps);
      iconColor = colors.sun;
      break;

    // Noche despejada
    case 'clear-night':
      iconElement = createElement(Moon, mergedProps);
      iconColor = colors.moon;
      break;

    // Parcialmente nublado
    case 'partly-cloudy-day':
      iconElement = createElement(CloudSun, mergedProps);
      iconColor = colors.cloud;
      break;

    // Parcialmente nublado noche
    case 'partly-cloudy-night':
      iconElement = createElement(CloudMoon, mergedProps);
      iconColor = colors.moon;
      break;

    // Nublado
    case 'cloudy':
      iconElement = createElement(Cloud, mergedProps);
      iconColor = colors.cloud;
      break;

    // Default para cualquier otro caso
    default:
      iconElement = createElement(Cloud, mergedProps);
      iconColor = colors.cloud;
  }

  // Establecer el color del icono
  iconElement.setAttribute('color', finalColor ?? iconColor);
  return iconElement;
};
