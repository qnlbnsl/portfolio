import { writable } from 'svelte/store';

export const theme = writable('mytheme-light');

export function toggleTheme() {
  theme.update(current => current === 'mytheme-light' ? 'mytheme-dark' : 'mytheme-light');
}