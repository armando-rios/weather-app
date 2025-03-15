import { renderWeather } from '../views/renderWeather.js';

export const initSearchController = () => {
  const searchForm = document.getElementById('search-form');
  const searchInput = document.getElementById('search-input');

  searchForm.addEventListener('submit', async e => {
    e.preventDefault();
    renderWeather(searchInput.value);
    searchInput.value = '';
  });
};
