import {
  createElement,
  Sun,
  Cloud,
  Wind,
  Search,
  Droplets,
  Thermometer,
  Eye,
  Compass,
  Sunrise,
  Sunset,
} from 'lucide';

export const OtherIcon = name => {
  const icon = name ? name.toLowerCase() : '';
  let setIcon;

  switch (icon) {
    case 'wind':
      setIcon = createElement(Wind, { strokeWidth: 1.5 });
      break;
    case 'humidity':
      setIcon = createElement(Droplets, { strokeWidth: 1.5 });
      break;
    case 'feels like':
      setIcon = createElement(Thermometer, { strokeWidth: 1.5 });
      break;
    case 'visibility':
      setIcon = createElement(Eye, { strokeWidth: 1.5 });
      break;
    case 'direction':
      setIcon = createElement(Compass, { strokeWidth: 1.5 });
      break;
    case 'sunrise':
      setIcon = createElement(Sunrise, { strokeWidth: 1.5 });
      break;
    case 'sunset':
      setIcon = createElement(Sunset, { strokeWidth: 1.5 });
      break;
    case 'uv index':
      setIcon = createElement(Sun, { strokeWidth: 1.5 });
      break;
    case 'pressure':
      setIcon = createElement(Cloud, { strokeWidth: 1.5 });
      break;
    default:
      setIcon = createElement(Search, { strokeWidth: 1.5 });
  }

  setIcon.setAttribute('color', 'var(--color-ink)');

  return setIcon;
};
