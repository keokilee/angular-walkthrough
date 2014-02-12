'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var livereload = require('gulp-livereload');
var express = require('express');
var path = require('path');

var createServer = function(port) {
  var app = express();
  app.use(express['static'](path.resolve('./build')));
  app.listen(port, function() {
    gutil.log('Listening on', port);
  });
};

gulp.task('dev-server', function() {
  createServer(3000);
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

gulp.task('default', function() {
  gulp.run('dev-server', 'js', 'templates', 'public');

  gulp.watch('app/**', ['templates', 'js']);
});

