var bs, gulp, sass, server, web;

bs = require('browser-sync').create();
gulp = require('gulp');
sass = require('gulp-sass');
server = require('gulp-webserver');

gulp.task('default', [ 'serve' ]);

gulp.task('dev', [ 'web', 'watch' ]);

gulp.task('sass', function () {
  return gulp.src('css/theme/source/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css/theme'))
    .pipe(bs.stream());
});

gulp.task('watch', [ 'sass' ], function () {
  gulp.watch('css/theme/source/*.scss', [ 'sass' ]);
  gulp.watch('index.html', bs.reload);
});

gulp.task('serve', function () {
  return gulp.src('./')
    .pipe(server());
});

gulp.task('web', function () {
  bs.init({
    server: {
      baseDir: './'
    },
    browser: 'google chrome'
  });
});
