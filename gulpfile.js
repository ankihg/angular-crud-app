'use strict';
const gulp = require('gulp');
const lint = require('gulp-eslint');
const mocha = require('gulp-mocha');
// const webpack = require('gulp-webpack');

const paths = ['*.js', 'test/*.js'];

gulp.task('default', ['test']);

gulp.task('lint', () => {
  return gulp.src(paths)
    .pipe(lint())
    .pipe(lint.format());
})

gulp.task('test', () => {
  return gulp.src(['test/*.js'], {read: false})
    .pipe(mocha({reporter:'nyan'}));
});

// gulp.task('build', () => {
//
// })
