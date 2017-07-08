// Dependencies
const changed = require('gulp-changed');
const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

// Configuration
const JSCompileTasks = require('config.json')('./config/gulp.json')
  .compileJS
  .filter(task => task.enabled); 

// Default task is to compile all JS
gulp.task("default", JSCompileTasks.map(task => task.name));

// Tasks for compiling JS
JSCompileTasks.forEach(task => {
  gulp.task(task.name, compileJS(task.src, task.dest));
});

// Create the compile chain for a source and destination
function compileJS(source, destination) {
  // Return the pipeline
  return () => gulp.src(source)
    .pipe(changed(destination))
    /* Babel config is in .babelrc */
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest(destination));
}
