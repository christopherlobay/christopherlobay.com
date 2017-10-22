var gulp = require('gulp');
var inlineSource = require('gulp-inline-source');

gulp.task('build', ['inline','favicon']);

gulp.task('favicon', function() {
  return gulp.src("./favicon.png")
    .pipe(gulp.dest('./build'));
});

gulp.task('inline', function() {
  return gulp.src('./index.html')
    .pipe(inlineSource({compress: true}))
    .pipe(gulp.dest('./build'));
});