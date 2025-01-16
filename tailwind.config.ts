import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {}
  },

  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [typography, forms, containerQueries, require('daisyui')]
} satisfies Config;
