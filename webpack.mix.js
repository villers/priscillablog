const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
  .react('resources/assets/js/bootstrap.js', 'public/js')
  .sass('resources/assets/scss/style.scss', 'public/css')
  .sourceMaps();

if (mix.config.inProduction) {
  mix.version();
}
