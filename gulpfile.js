var gulp = require('gulp');
var sass = require('gulp-sass');

/*===========Compile SCSS==============*/
gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

/*===========Watch==============*/
gulp.task('watch',function() {
    gulp.watch('sass/**/*.scss',['styles']);
});


