/*!
 * gulp
 * $ npm install gulp-sass gulp-autoprefixer gulp-cssnano gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename gulp-livereload gulp-cache del --save-dev
 */
var style_dir = 'styles/';
var scripts_dir = 'scripts/';
var images_dir = 'images/';
var dist_dir = '../static/';
var build_dir = 'build/';
var dist_style_dir = dist_dir + 'css';
var dist_scripts_dir = dist_dir + 'js';
var dist_images_dir = dist_dir + 'images';
var dependencies_js_dirs = [
  'bower_components/jquery/dist/jquery.min.js',
  'bower_components/bootstrap/dist/js/bootstrap.min.js'
];
var dependencies_css_dirs = [
  'bower_components/bootstrap/dist/css/bootstrap.min.css'
];

// Load plugins
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del');
    concat = require('gulp-concat');
    webpackStream = require('webpack-stream');
    webpack2 = require('webpack');
    webpackConfig = require('./webpack.config')

// Styles
gulp.task('styles', function() {
  return gulp.src(style_dir + '**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest(dist_style_dir))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cssnano())
    .pipe(gulp.dest(dist_style_dir))
    .pipe(notify({ message: 'Styles task complete' }));
});

// Scripts
gulp.task('scripts', function() {
  return gulp.src('src/main.jsx')
    .pipe(webpackStream(webpackConfig, webpack2))
    .pipe(gulp.dest(dist_scripts_dir))
    .pipe(notify({ message: 'Scripts task complete' }));
});

// Dependencies
gulp.task('dependencies', function() {
  var js_dependancies = gulp.src(dependencies_js_dirs)
    .pipe(gulp.dest(dist_scripts_dir + '/lib/'))
  return css_dependancies = gulp.src(dependencies_css_dirs)
    .pipe(gulp.dest(dist_style_dir))
    .pipe(notify({ message: 'Dependencies task complete' }));
})

// Images
gulp.task('images', function() {
  return gulp.src(images_dir + '**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest(dist_images_dir))
    .pipe(notify({ message: 'Images task complete' }));
});

// Clean
gulp.task('clean', function() {
  return del([dist_style_dir, dist_scripts_dir, dist_images_dir]);
});

// Default task
gulp.task('default', ['clean'], function() {
  gulp.start('dependencies', 'styles', 'scripts', 'images');
});

// Watch
gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch(style_dir + '**/*.scss', ['styles']);

  // Watch .js files
  gulp.watch(scripts_dir + '**/*.jsx', ['scripts']);

  // Watch image files
  gulp.watch(images_dir + '**/*', ['images']);

  // Create LiveReload server
  livereload.listen();

  // Watch any files in dist/, reload on change
  gulp.watch([dist_dir + '**']).on('change', livereload.changed);

});
