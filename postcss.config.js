const themeDir = __dirname;

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    require('tailwindcss')(themeDir + '/tailwind.config.js'),
    require('autoprefixer')({
      path: [themeDir]
    })
  ]
}

module.exports = config
