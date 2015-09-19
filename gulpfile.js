/// <binding ProjectOpened='sass:watch' />
var gulp = require('gulp');

var uglify = require('gulp-uglify');

var sass = require('gulp-sass');

var autoprefixer = require('gulp-autoprefixer');

var rename = require('gulp-rename');

var del = require('del');

var util = require('gulp-util');

gulp.task('sass', function () {
	return gulp.src('site/sass/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('site/css'));
});

gulp.task('sass:watch', function () {
	gulp.watch('site/sass/*.scss', ['sass']);
});

gulp.task('minify-js', ['clean-js'], function () {
	return gulp.src('src/*.js')
		.pipe(uglify())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('dist'));
});

gulp.task('clean-js', function (done) {
	var file = 'dist/ng-highlight.min.js';
	util.log(util.colors.green('cleaning'), ' -- ', util.colors.yellow(file));
	del(file, done);
});


gulp.task('build', ['minify-js']);