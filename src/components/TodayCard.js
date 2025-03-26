import { OtherIcon } from './OtherIcon.js';

export const TodayCard = (text, data) => {
  const box = document.createElement('div');
  box.className =
    'flex flex-col items-center p-2 gap-2 w-32 bg-blue-50 rounded-md';

  const header = document.createElement('div');
  header.className = 'flex items-center';
  const iconTitle = OtherIcon(text);
  const title = document.createElement('p');
  header.append(...[iconTitle, title]);
  const textData = document.createElement('p');
  title.className = 'text-lg text-blue-500 font-semibold text-center';
  title.textContent = text;
  textData.textContent = data;
  textData.className = 'text-3xl text-center font-bold';

  box.append(...[header, textData]);

  return box;
};
