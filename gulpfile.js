var gulp = require('gulp');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var to5ify = require('6to5ify');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var sass = require('gulp-ruby-sass');
var prefix = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var notify = require("gulp-notify");
var templateCache = require('gulp-angular-templatecache');
var usemin = require('gulp-usemin');
var wiredep = require('wiredep').stream;
var minifyCSS = require('gulp-minify-css');
var SASSDIR = './app/sass/main.scss';
var JSDIR = './app/main.js';
var shell = require('gulp-shell');

gulp.task('bundle', function () {
    var onError = function (err) {
        notify.onError({
            title: "Gulp",
            subtitle: "JS Failure!",
            message: "Error: <%= error.message %>",
            sound: "Beep"
        })(err);
    };
    browserify(JSDIR, {debug: true})
        .transform(to5ify)
        .bundle()
        .pipe(plumber({errorHandler: onError}))
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(ngAnnotate())
        .pipe(sourcemaps.write('./'))
        .pipe(livereload())
        .pipe(gulp.dest('./build'))
        .pipe(notify("Js Finished!"));
});

gulp.task('sass', function () {
    var onError = function (err) {
        notify.onError({
            title: "Gulp",
            subtitle: "Sass Failure!",
            message: "Error: <%= error.message %>",
            sound: "Beep"
        })(err);
    };
    return sass(SASSDIR)
        .pipe(plumber({errorHandler: onError}))
        .pipe(prefix("last 10 versions", "> 1%", "ie 8", "ie 7"))
        .pipe(gulp.dest('./build'))
        .pipe(notify("Sass Finished!"))
        .pipe(livereload());
});

gulp.task('templates', function () {
    gulp.src('./app/**/views/**/**.html')
        .pipe(templateCache({
            standalone: true,
            root: 'app',
            module: 'templates'
        }))
        .pipe(gulp.dest('./app'));
});

gulp.task('usemin', function () {
    gulp.src('./index.html')
        .pipe(usemin({
            assetsDir: __dirname,
            js: [uglify({mangle: false})],
            css: [minifyCSS(), 'concat']
        }))
        .pipe(gulp.dest('./production'));
});


gulp.task('watch', function () {
    livereload.listen();
    gulp.watch(['./app/sass/**/*.scss', './app/**/sass/*.scss'], ['sass']),
        gulp.watch('./app/**/*.js', ['bundle']),
        gulp.watch('./bower.json', ['bower']),
        gulp.watch('./app/**/views/*.html', ['live'])
});

gulp.task('bower', function () {
    gulp.src('./index.html', {base: '.'})
        .pipe(wiredep())
        .pipe(gulp.dest('./'));
});

gulp.task('copyDev', function () {
    return gulp.src(['img/**/*'])
        .pipe(gulp.dest('./build/img'))
});

gulp.task('copyProd', function () {
    gulp.src(['img/**/*'])
        .pipe(gulp.dest('./production/img'));
    gulp.src(['package.json','winGui.js'])
        .pipe(gulp.dest('./production'));
});

gulp.task('run', shell.task('./node_modules/nw/bin/nw'));
gulp.task('dev', ['watch', 'copyDev', 'bundle', 'sass']);
gulp.task('prod', ['sass', 'bundle', 'templates', 'copyProd', 'usemin']);
gulp.task('default', ['dev', 'run']);
