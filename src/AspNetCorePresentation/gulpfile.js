/// <binding ProjectOpened='sass:watch' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp'),
    sass = require('gulp-sass');

var paths = {
    webroot: "./wwwroot/",
    sass: "./wwwroot/css/**/*.scss"
};

gulp.task('default', function () {
    // place code for your default task here
});

//SASS Watcher

gulp.task('sass', function () {
    return gulp.src(paths.sass)
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest(paths.webroot + 'css'));
});

gulp.task('sass:watch', function () {
    gulp.watch(paths.sass, ['sass']);
});