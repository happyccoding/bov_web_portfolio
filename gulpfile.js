
var gulp = require('gulp');
var sass = require('gulp-sass'); // Requires the gulp-sass plugin
var browserSync = require('browser-sync').create();


gulp.task('hello', function() {
    console.log('Hello!');
});

// Default
gulp.task('default', ['sass', 'watch']);


gulp.task('sass', function() {
    return gulp.src('sass/**/*.scss')
        .pipe(sass()) // using gulp-sass
        .pipe(gulp.dest('css'))
});

gulp.task('watch', ['browserSync', 'sass'], function() {
    gulp.watch('sass/**/*.scss', ['sass']);
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('html/*.html', browserSync.reload);
    gulp.watch('js/*.js', browserSync.reload);
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: './'
        },
    })
});

gulp.task('sass', function() {
    return gulp.src('sass/**/*.scss') // Gets all the files ending with .scss in app/scss
        .pipe(sass())
        .pipe(gulp.dest('css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// deploy
gulp.task('deploy', ['sass']);
