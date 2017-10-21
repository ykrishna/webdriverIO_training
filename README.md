**Steps to Run WDIO Scripts**

I order run wdio scripts we need selenium server and browser drivers linkage 

so run the selenium server with chrome driver linkage

java -jar -Dwebdriver.chrome.driver=chromedriver.exe selenium-server-standalone-3.3.1.jar

In above step chromedriver.exe and selenium server jar in current working directory but in other cases we need to provide the full path where they are stored

If you want selenium, chromedriver and marionette driver should install them selves set path automatically we should use "selenium-standalone" packegae from npm

npm install -g selenium-standalone
selenium-standalone install -- will install chromedriver seleniumserver and marrionette driver at location /usr/local/lib/node_modules/selenium-standalone/.selenium
selenium-standalone start -- will take care everything for you

run main.js file with node : node main.js

**new changes introduces**

added "wdio-selenium-standalone-service" as a dependency so I do not need to run manually selenium-standalone start
created full pledged wdio frameworks with wdio.conf.js 

"scripts": {
    "test": "wdio wdio.conf.js"
  }

run wdio runner scripts 

npm test -- it will automatically get the wdio runner path from node modules 

else manually we can run using 

node node_modules/.bin/wdio wdio.conf.js

**run with Gulp task runner with gulp-wbdriver**

add gulp file with following code 

var gulp = require('gulp');
var webdriver = require('gulp-webdriver');

gulp.task('test:e2e', function() {
    return gulp.src('./wdio.conf.js').pipe(webdriver());

});

run : gulp test:e2e