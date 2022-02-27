const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.jsx', 'public/js')
    .react()
    .sass('resources/css/app.scss', 'public/css', [

    ]);

mix.copyDirectory('resources/images','public/images');
mix.copy('resources/css/style.css','public/css');
mix.copy('resources/css/responsive.css','public/css');
