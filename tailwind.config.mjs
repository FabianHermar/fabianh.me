/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        GilroyRegular: ['GilroyRegular', 'sans-serif'],
        GilroyBold: ['GilroyBold', 'sans-serif'],
        GilroySemibold: ['GilroySemibold', 'sans-serif']
      }
    }
  },
  plugins: []
}
