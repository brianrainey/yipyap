const gulp = require('gulp');
const zip = require('gulp-zip');
 
exports.default = () => (
    gulp.src(['manifest.json', 'yipyap.js', 'icons/**'], {base: '.'})
        .pipe(zip('yipyap.xpi'))
        .pipe(gulp.dest('dist'))
);
