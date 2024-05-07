/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [
    ({ addComponents }) =>
      addComponents({
        ".bg": { "@apply bg-zinc-100 dark:bg-zinc-900": {} },
        ".fg": { "@apply text-zinc-900 dark:text-zinc-200": {} },
      }),
  ],
};
