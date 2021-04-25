const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

function css() {
    return gulp
        .src('scss/app.scss')
        .pipe(autoprefixer() )
        .pipe(sass({ outputStyle: "expanded" }))
        .pipe(gulp.dest("css"))
}
function watchFiles() {
    gulp.watch('scss/*.scss', css); /* El * indica que son todos los archivos con al extension .scss */
    gulp.watch('index.html') /*Que tambien escuche al archivo html*/ 
}

// tasks
gulp.task('css', css);
gulp.task("watch", gulp.parallel(watchFiles)); /*parallel, para que se ejecute en paralelo,
cualquiera de las dos funciones */