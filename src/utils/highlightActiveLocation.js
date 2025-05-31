/**
 * Marks a saved location button in the sidebar as the active one
 * by adding `bg-surface` to the matching item and removing it from
 * any sibling that previously had it. Safe to call with a name that
 * has no matching button — it just no-ops in that case.
 *
 * @param {string|undefined|null} name - The location name (the same
 *   value passed to `Location()`). Used to look up the matching
 *   `.location-button[data-location="…"]` element.
 */
export const highlightActiveLocation = name => {
  const all = document.querySelectorAll('.location-button');
  all.forEach(el => el.classList.remove('bg-surface'));
  if (!name) return;
  const target = Array.from(all).find(el => el.dataset.location === name);
  if (target) target.classList.add('bg-surface');
};
