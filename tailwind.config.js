module.exports = {
  purge: ['./src/components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {},
  },
  content: [],
  variants: {},
  plugins: [require('tailwindcss'), require('precss'), require('autoprefixer')],
};
