const eslint = require('gulp-eslint');

const txtPath = '_site/*.txt';
const distPath = 'dist/';

module.exports = gulp => {
    gulp.task('txt', () => {
        return (
            gulp
                .src(txtPath)
                .pipe(
                    eslint({
                        useEslintrc: true,
                    })
                )
                .pipe(eslint.format())
                .pipe(gulp.dest(distPath))
        );
    });
};