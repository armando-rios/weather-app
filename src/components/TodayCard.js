import { OtherIcon } from './OtherIcon.js';

export const TodayCard = (text, data) => {
  const box = document.createElement('div');
  box.className =
    'bg-surface border border-line rounded-lg px-4 py-4 flex flex-col gap-2 min-w-[140px]';

  const header = document.createElement('div');
  header.className = 'flex items-center gap-2';
  const iconTitle = OtherIcon(text);
  const title = document.createElement('span');
  title.className = 'label-mono';
  title.textContent = text;
  header.append(...[iconTitle, title]);

  const textData = document.createElement('p');
  textData.textContent = data;
  textData.className =
    'text-2xl font-normal tracking-tight text-ink tabular-nums';

  box.append(...[header, textData]);

  return box;
};
