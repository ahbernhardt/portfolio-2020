const eslint = require('gulp-eslint');

const htmlPath = '_site/*.html';
const pdfPath = '_site/*.pdf';
const txtPath = '_site/*.txt';
const xmlPath = '_site/*.xml';
const distPath = 'dist/';

module.exports = gulp => {
    gulp.task('pages', () => {
        return (
            gulp
                .src(htmlPath,pdfPath,txtPath,xmlPath)
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
