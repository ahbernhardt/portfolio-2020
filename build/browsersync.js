// const browserSync = require('browser-sync').create();
// const cp = require('child_process');
// const {task, series} = require('gulp')
//
// const jekyll = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
//
// const scssPath = '_scss/**/*.scss';
// const jsPath = '_scripts/*.js';
// const templatePath = [
//   '*.html',
//   '+(_includes|_layouts)/*.html',
//   '*.yml',
//   '_data/*.yml',
//   '_posts/*',
// ];
//
// module.exports = gulp => {
//   const reloadBrowser = done => {
//     browserSync.reload();
//     done();
//   };
//   // run `jekyll build`
//   task('jekyll-build', done => {
//     return cp.spawn(jekyll, ['build'], { stdio: 'inherit' }).on('close', done);
//   });
//
//   // run `jekyll build` with _config_dev.yml
//   task('jekyll-dev', done => {
//     return cp
//       .spawn(jekyll, ['build', '--config', '_config.yml,_config_dev.yml'], {
//         stdio: 'inherit',
//       })
//       .on('close', done);
//   });
//
//   // Rebuild Jekyll then reload the page
//   task('jekyll-rebuild', series(['jekyll-dev', reloadBrowser]));
//
//   task(
//     'serve',
//     series('jekyll-dev', () => {
//       browserSync.init({
//         server: {
//           baseDir: '_site',
//         },
//       });
//
//       gulp.watch(scssPath, series(['sass', reloadBrowser]));
//       gulp.watch(jsPath, series(['scripts', reloadBrowser]));
//       gulp.watch(templatePath, task('jekyll-rebuild'));
//     })
//   );
// };
