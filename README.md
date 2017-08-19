run the selenium server with chrome driver linkage

java -jar -Dwebdriver.chrome.driver=chromedriver.exe selenium-server-standalone-3.3.1.jar

in above step chromedriver.exe and selenium server jar in current working directory but in other cases we need to provide the full path where they are stored
if you want selenium, chromedriver and marionette driver should install them selves set path automatically we should use selenium standalone packegae from npm

npm install -g selenium-standalone
selenium-standalone install --- will install chromedriver seleniumserver and marrionette driver at location /usr/local/lib/node_modules/selenium-standalone/.selenium
selenium-standalone start -- will take care everything for you


run
node main.js
