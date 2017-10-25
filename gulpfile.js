const gulp = require('gulp');
const bs = require('browser-sync').create();

gulp.task('serv', () => {
  bs.init({
    server: {
      baseDir: '.'
    }
  });
});

gulp.task('watch', () => {
  gulp.watch(['*.html', 'css/**/*.css', 'js/**/*.js']).on('change', bs.reload);
});

gulp.task('default', ['serv', 'watch']);
