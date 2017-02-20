//To be installed: gulp-sass, gulp-connect, gulp-open

var gulp = require('gulp'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass');
    open = require('gulp-open');

//style paths
var sassFiles = 'assets/scss/*.scss',  
    cssDest = 'assets/css/';

gulp.task('styles', function(){  
    gulp.src(sassFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(cssDest));
});

//installs a local webserver
gulp.task('connect', function() {
  connect.server();
});

gulp.task('open', function(){
  var options = {
    uri: 'http://localhost:8080/',
    app: 'chrome'
  };
  gulp.src('index.html')
  .pipe(open(options));
});

gulp.task('watch',function() {  
    gulp.watch(sassFiles,['styles']);
});

gulp.task('default', ['styles', 'watch', 'connect','open']);
   

  