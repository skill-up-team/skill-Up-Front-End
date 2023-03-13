/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}',
  "./node_modules/tw-elements/dist/js/**/*.js"
],
  theme: {
    extend: {

      colors: {
        'body': '#F6F7F9',
        'primary-color': '#006AA6',
        'secondary-color': '#32384A',
        'tertiary-color': '#F6F7F9',
        'primary-font': '#32384A',
        'service-font-color': '#565D73',
        'service-title-font-color': '#282D3E',
        'secondary-font': '#6A7186',
        "change-button":"#F0F1F5",
        'icon-bg-light': '#FCF5E3',
        'fare-basic': '#006351',
        'fare-classic': '#C21313',
        'fareBoder0': '#006351',
        'fareBoder1': '#C21313',
        'fareBoder2': '#DAB267',
        'fareBoder3': '#282D3E',
        'seatBg-color':'#F1F2F4',
      },
      fontSize: {
        'h1-font': '28px',
        'h2-font': '20px',
        'h3-font': '18px',
        'p1-font': '16px',
        'p2-font': '14px',
        'p3-font': '12px',


      },
      fontFamily: {
        'proxima': 'Proxima Nova'
      }
    },
  },
  plugins: [
    require("tw-elements/dist/plugin")
  ],
}
