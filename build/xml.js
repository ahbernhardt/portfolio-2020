const eslint = require('gulp-eslint');

const xmlPath = '_site/*.xml';
const distPath = 'dist/';

module.exports = gulp => {
    gulp.task('xml', () => {
        return (
            gulp
                .src(xmlPath)
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