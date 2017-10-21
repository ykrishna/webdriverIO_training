var gulp = require('gulp');
var webdriver = require('gulp-webdriver');

gulp.task('taskName', function () {
    //process.stdout.write("write something"+'\n');
    var platform = /^win3/.test(process.platform) ? 'hello' : 'world';
    process.stdout.write(platform + '\n');
    console.log('bajan lal');
})

gulp.task('secondTask', ['taskName'], function () {
    console.log('jim carry')
})

gulp.task('test:e2e', function() {
    return gulp.src('./wdio.conf.js').pipe(webdriver());

});

