export const TodaySection = data => {
  const container = document.createElement('div');
  container.className =
    'flex flex-col items-center bg-white justify-center p-4 items-start border border-gray-200 rounded-xl';

  const title = document.createElement('h3');
  title.className = 'text-xl font-semibold mb-2';
  title.innerText = "Today's Highlight";

  const weatherData = document.createElement('div');
  weatherData.className = 'flex items-center';

  const box = document.createElement('div');
  box.className =
    'flex flex-col items-center p-2 gap-2 w-32 bg-blue-50 rounded-md';
  const text = document.createElement('p');
  const textData = document.createElement('p');
  text.className = 'text-lg text-blue-500 font-semibold';
  text.textContent = 'Feels Like';
  textData.textContent = data.feelslike;

  box.append(...[text, textData]);

  weatherData.append(box);

  container.append(...[title, weatherData]);

  return container;
};
