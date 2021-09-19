const gulp = require('gulp');
const sass = require('./build/sass');
const scripts = require('./build/scripts');
const images = require('./build/images');
const pages = require('./build/pages');
const txt = require('./build/txt');
const pdf = require('./build/pdf');
const xml = require('./build/xml');
const sync = require('./build/browsersync');
const ghPages = require('gh-pages');

[sass, scripts, images, sync, pages, txt, pdf, xml].forEach(task => {
  task(gulp);
});

gulp.task('build', gulp.series(['pages','txt','pdf','xml','sass', 'scripts', 'images', 'jekyll-build']));
/**
 * Push build to gh-pages
 */
gulp.task('deploy', () => gulp.src('./dist/**/*').pipe(ghPages()));