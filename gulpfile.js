// dependencias
const { parallel, src, dest, watch } = require("gulp");
const sass = require("gulp-sass");

//Utilidades CSS
const autoprefixer = require("autoprefixer");   //Crea prefijos en algunos lugares (no necesario)
const postcss = require("gulp-postcss"); //Necesario para modificar tu archivo css (se necesita crear archivo postcss.config.js)
const cssnano = require("cssnano"); //Optimiza tu codigo y lo coloca todo en una linea
const concat = require("gulp-concat"); //une dos archivos
const rename = require("gulp-rename"); //Renombrar un archivo
const terser = require("gulp-terser-js"); // Coloca todo el js en una linea igual que nano para css
const sourcemaps = require("gulp-sourcemaps"); //crea un archivo mapa que coloca referencias al codigo indicando de donde viene el mismo

const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const cache = require('gulp-cache');

// paths
paths = {
    css: "build/css",
    scss: "source/scss/**/*.scss",
    js: "source/js/**/*.js",
    imagenes: 'source/img/**/*'
}

function compilarCSS (){
    return src(paths.scss)
        .pipe(sourcemaps.init()) // "inicia" el sourcemaps
        .pipe(sass())
        .pipe(postcss(  [autoprefixer(), cssnano()  ]) )
        .pipe(sourcemaps.write(".")) //Escribe nuestro propio archivo separado "map"
        .pipe(dest(paths.css))
}

function imagenes() {
    return src(paths.imagenes)
        .pipe(cache(imagemin({ optimizationLevel: 3})))
        .pipe(dest('./build/img'))
        .pipe(notify({ message: 'Imagen Completada'}));
}

function javascript(){
    return src(paths.js)
    .pipe(sourcemaps.init())
    .pipe(concat("bundle.js")) //Como se llamara el archivo final
    .pipe(sourcemaps.write('.'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest("./build/js")) //Donde se guardara
}

function watchArchivo(){
    watch(paths.scss, compilarCSS)
    watch(paths.js, javascript)
}

exports.css = compilarCSS;
exports.imagenes = imagenes;
exports.default = parallel(compilarCSS, javascript, watchArchivo);