﻿/// <binding ProjectOpened='sass:watch' />
var gulp = require('gulp');

var uglify = require('gulp-uglify');

var sass = require('gulp-sass');

var autoprefixer = require('gulp-autoprefixer');

var rename = require('gulp-rename');

var minifyCss = require('gulp-minify-css');

gulp.task('sass', function () {
    return gulp.src('demo-site/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(minifyCss())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('demo-site/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('demo-site/sass/*.scss', ['sass']);
});

gulp.task('minify-js', function () {
    return gulp.src('ng-highlight/src/*.js')
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('ng-highlight/dist'));
});

gulp.task('build', ['minify-js']);