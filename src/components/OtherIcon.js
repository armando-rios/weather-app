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
      setIcon = createElement(Wind);
      break;
    case 'humidity':
      setIcon = createElement(Droplets);
      break;
    case 'feels like':
      setIcon = createElement(Thermometer);
      break;
    case 'visibility':
      setIcon = createElement(Eye);
      break;
    case 'direction':
      setIcon = createElement(Compass);
      break;
    case 'sunrise':
      setIcon = createElement(Sunrise);
      break;
    case 'sunset':
      setIcon = createElement(Sunset);
      break;
    case 'uv index':
      setIcon = createElement(Sun);
      break;
    case 'pressure':
      setIcon = createElement(Cloud);
      break;
    default:
      setIcon = createElement(Search);
  }

  setIcon.setAttribute('color', '#3b82f6');

  return setIcon;
};
