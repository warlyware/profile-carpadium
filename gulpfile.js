'use strict';

var gulp = require('gulp');
var config = require('./gulp/config.json');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var connect = require('gulp-connect');


// watch files for changes and reload

gulp.task('styles', function() {
    return gulp.src(config.paths.src.styles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('build'))
        .pipe(connect.reload());
});

gulp.task('copy:html', function() {
  return gulp.src(config.paths.src.html)
    .pipe(gulp.dest('build'))
    .pipe(connect.reload());
});

gulp.task('copy:js', function() {
  return gulp.src(config.paths.src.js)
    .pipe(gulp.dest('build'))
    .pipe(connect.reload());
});

gulp.task('copy:node_modules', function() {
  return gulp.src(config.paths.node_modules)
    .pipe(gulp.dest('build/node_modules'))
    .pipe(connect.reload());
});

gulp.task('serve', function() {
    connect.server({
        root: 'build',
        livereload: true
    });
});

gulp.task('watch', function() {
    gulp.watch(config.paths.src.html, ['copy:html']);
    gulp.watch(config.paths.src.js, ['copy:js']);
    gulp.watch(config.paths.src.styles, ['styles']);
});

gulp.task('default', ['styles', 'copy:html', 'copy:js', 'copy:node_modules', 'serve', 'watch']);
