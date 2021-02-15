// dependencias
const { series, src, dest, watch } = require("gulp");
const sass = require("gulp-sass");

// paths
paths = {
    css: "build/css",
    scss: "source/scss/**/*.scss"
}

function compilarCSS (){
    return src(paths.scss)
        .pipe(sass({
            outputStyle: "expanded"
        }))
        .pipe(dest(paths.css))
}

function watchArchivo(){
    watch(paths.scss, compilarCSS)
}

exports.css = compilarCSS;
exports.default = series(compilarCSS, watchArchivo);