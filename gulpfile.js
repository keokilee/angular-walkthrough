'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var livereload = require('gulp-livereload');
var server = require('./server');

gulp.task('dev-server', function() {
  server.createServer(3000, function() {
    gutil.log('Listening on', 3000);
  });
});

gulp.task('public', function() {
  gulp.src('public/**')
      .pipe(gulp.dest('build/'));
});

gulp.task('js', function() {
  gulp.src('app/js/**')
      .pipe(gulp.dest('build/js'))
      .pipe(livereload());
});

gulp.task('templates', function() {
  gulp.src('app/views/**/*.html')
      .pipe(gulp.dest('build/'))
      .pipe(livereload());
});

gulp.task('watch', function() {
  gulp.watch('app/**', ['templates', 'js']);
});

gulp.task('default', ['dev-server', 'js', 'templates', 'public', 'watch']);
