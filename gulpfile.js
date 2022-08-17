const gulp = require('gulp');
const {task, series} = require('gulp');
const browserSync = require('browser-sync').create();
const cp = require('child_process');
const ghPages = require('gulp-gh-pages')
const eslint = require('gulp-eslint');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass')(require('sass'));
const prefix = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');

const imgPath = 'img/**/*.{png,jpg,jpeg,svg}';
const imgDestPath = './dist/img/';
const scssPath = '_scss/*.scss';
const cssDestPath = './dist/css';
const jsPath = '_scripts/*.js';
const jsDestPath = './dist/js';

task('sass', () => {
    return gulp
        .src(scssPath)
        .pipe(
            sass({
                includePaths: ['scss'],
                outputStyle: 'expanded',
            })
        )
        .pipe(
            prefix({
                overrideBrowserslist: ['last 2 versions'],
                cascade: false,
            })
        )
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest(cssDestPath))
        .pipe(gulp.dest('css'));
});


task('scripts', () => {
    return (
      gulp.src(jsPath)
        .pipe(
            eslint({
                useEslintrc: true,
            })
        )
        .pipe(uglify())
        .pipe(eslint.format())
        .pipe(gulp.dest(jsDestPath))
        .pipe(gulp.dest('js'))
        .pipe(gulp.dest('build'))
    );
});

// const imagemin = import('gulp-imagemin');
task('images', async () => {
    gulp.src(imgPath)
       .pipe(imagemin())
       .pipe(gulp.dest(imgDestPath))
});

const jekyll = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
const templatePath = [
  '*.html',
  '+(_includes|_layouts)/*.html',
  '*.yml',
  '_data/*.yml',
  '_posts/*',
];

const reloadBrowser = done => {
browserSync.reload();
done();
};
// run `jekyll build`
task('jekyll-build', done => {
return cp.spawn(jekyll, ['build'], { stdio: 'inherit' }).on('close', done);
});

// run `jekyll build` with _config_dev.yml
task('jekyll-dev', done => {
return cp
    .spawn(jekyll, ['build', '--config', '_config.yml,_config_dev.yml'], {
      stdio: 'inherit',
    })
    .on('close', done);
});

// Rebuild Jekyll then reload the page
task('jekyll-rebuild', series(['jekyll-dev', reloadBrowser]));

task('serve',
  series('jekyll-dev', () => {
    browserSync.init({
      server: {
        baseDir: '_site',
      },
    });
    gulp.watch(scssPath, () => series(['sass', reloadBrowser]));
    gulp.watch(jsPath, ()=> series(['scripts', reloadBrowser]));
    gulp.watch(templatePath, () => task('jekyll-rebuild'));
  })
);

task('build', series('sass', 'scripts', 'images', 'jekyll-build'));

task('deploy', function () {
    return gulp.src("_site/**/*")
        .pipe(ghPages({
            remoteUrl: "https://github.com/ahbernhardt/portfolio-2020.git",
            branch: "master"
        }))
});
