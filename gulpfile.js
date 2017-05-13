var gulp = require('gulp');
var selenium;
gulp.task('selenium',function () {

})

gulp.task('taskName',function () {
    //process.stdout.write("write something"+'\n');
    var platform = /^win3/.test(process.platform)? 'hello' : 'world';
    process.stdout.write(platform+'\n');
    console.log('bajan lal');
})

gulp.task('secondTask',['task','taskName'],function () {
    console.log('jim carry')
})
