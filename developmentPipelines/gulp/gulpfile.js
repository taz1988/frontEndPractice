let gulp = require('gulp');
let concat = require('gulp-concat');
let cleanCSS = require('gulp-clean-css');
let uglify = require('gulp-uglify');
let htmlReplace = require('gulp-html-replace');
let del = require('del');

function clean() {
  return del(['dist/**']);
}

function javascript()
{
  return gulp.src('./assets/js/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/'));
}

function stylesheet()
{
  return gulp.src('./assets/css/*.css')
    .pipe(concat('main.css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./dist/'));
}

function updateHeader()
{
  return gulp.src('index.html')
   .pipe(htmlReplace({
       'css': 'main.css',
       'js': 'main.js'
   }))
   .pipe(gulp.dest('./dist/'));
}

exports.clean = clean;
exports.default = gulp.series(clean, gulp.parallel(javascript, stylesheet, updateHeader));
