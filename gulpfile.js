const { src, dest } = require('gulp');
const minifyJs = require('gulp-uglify');
const sourceMaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');

const jsFiles = [
  './src/jquery.min.js',
  './src/popper.min.js',
  './src/bootstrap.min.js',
  './src/app.js',
];
const bundleJs = () => {
  return src(jsFiles)
    .pipe(sourceMaps.init())
    .pipe(minifyJs())
    .pipe(concat('bundle.js'))
    .pipe(sourceMaps.write())
    .pipe(dest('./src/'));
};

exports.bundleJs = bundleJs;

const styleFiles = ['./styles/bootstrap.min.css', './styles/styles.css'];

const minifyCss = require('gulp-clean-css');
const bundleCss = () => {
  return src(styleFiles)
    .pipe(sourceMaps.init())
    .pipe(minifyCss())
    .pipe(sourceMaps.write())
    .pipe(concat('bundle.css'))
    .pipe(dest('./styles/'));
};
exports.bundleCss = bundleCss;

const sass = require('gulp-sass')(require('sass'));
const bundleScss = () => {
  return src('./styles/*.scss')
    .pipe(sourceMaps.init())
    .pipe(sass().once('error', sass.logError))
    .pipe(minifyCss())
    .pipe(dest('./styles/'));
};
exports.bundleScss = bundleScss;
