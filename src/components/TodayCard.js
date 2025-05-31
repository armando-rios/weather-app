import { OtherIcon } from './OtherIcon.js';

export const TodayCard = (text, data) => {
  const box = document.createElement('div');
  box.className =
    'bg-surface border border-line rounded-lg p-5 flex flex-col justify-between min-w-0 h-full min-h-[100px]';

  const header = document.createElement('div');
  header.className = 'flex items-center justify-between gap-2';
  const iconTitle = OtherIcon(text);
  const title = document.createElement('span');
  title.className = 'label-mono';
  title.textContent = text;
  header.append(iconTitle, title);

  const textData = document.createElement('p');
  textData.textContent = data;
  textData.className =
    'text-2xl font-normal tracking-tight text-ink tabular-nums';

  box.append(header, textData);

  return box;
};
