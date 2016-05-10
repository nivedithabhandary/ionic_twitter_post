# ionic_twitter_post
  Ionic app to showcase twitter based oath login to post multiple tweets at a time

# Description
  Ionic is a complete open source SDK for hybrid mobile app development. Built on top of AngularJS and Apache Cordova, Ionic provides tools and services for developing hybrid mobile apps using Web technologies like CSS, HTML5 and Sass. Apps can be built with these Web technologies and then distributed through native app stores to be installed on devices by leveraging Cordova.

  This project is built on ionic framework and uses ngTwitter to access the Twitter REST Api to get the home timeline and to post tweets. ngCordova is used to get the OAuth token.

# Steps to be followed :
1. git clone https://github.com/nivedithabhandary/ionic_twitter_post.git
2. cd ionic_twitter_post
3. sudo npm install -g cordova ionic
4. ionic add platform ios
5. bower install ng-twitter-api --save
6. bower install ngCordova#master --save
7. cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-inappbrowser.git
8. cordova plugin add cordova-plugin-whitelist
9. ionic build ios
10. ionic emulate ios

# References :
https://dev.twitter.com/rest/public
http://ionicframework.com/docs/guide/preface.html
http://ngcordova.com/docs/install/
https://www.npmjs.com/package/ng-twitter
https://github.com/Caligatio/jsSHA


