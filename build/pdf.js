const eslint = require('gulp-eslint');

const pdfPath = '_site/*.pdf';
const distPath = 'dist/';

module.exports = gulp => {
    gulp.task('pdf', () => {
        return (
            gulp
                .src(pdfPath)
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