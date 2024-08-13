/** @type {import('tailwind.css').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [('@tailwindcss/line-clamp','flowbite/plugin')],
  darkMode: false,
};
