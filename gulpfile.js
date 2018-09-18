var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('sass-dev', function(){
	gulp.src('./src/css/scss/style.scss')
	.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(rename("style.min.css"))
	.pipe(gulp.dest('src/css'))
	.pipe(reload({ stream:true }))
});

gulp.task('browser-sync', function() {
    browserSync.init(
    	[
            "./src/css/scss/*.scss",
    		"./src/css/*.css",
            "./src/js/*.js",
            "./src/*html",
            "./*.html",
            "./node_modules/vue/dist/vue.js",
            "./node_modules/vue-resource/dist/vue-resource.js",
    		"./src/image/*"
		], {
        server: {
            baseDir: "./"
        }

    })
});
gulp.task('reload', function(){
    gulp.src('./src')
    .pipe(reload({ stream:true }))
});
gulp.task('default', ['browser-sync', 'reload'], function(){
    gulp.watch(["./src/css/scss/**/*.scss", "./src/css/scss/*/*.scss"],[ 'sass-dev'])
});