// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// angular.module('starter', ['ionic'])
angular.module('starter', ['ionic', 'ngCordova', 'ngTwitter'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('AppCtrl', function($scope, $ionicPlatform, $twitterApi, $cordovaOauth) {
    var twitterKey = 'STORAGE.TWITTER.KEY';
    var clientId = '0IkG0PSU4nr5L1PPSAQ5VfaEn';
    var clientSecret = 'OzKsA6RulH0PtPJkmifLHkPv69v98MM5UmfvWagvx4KU2xfOK1';
    var myToken = '';

    $scope.tweet = {};

    $ionicPlatform.ready(function() {
      myToken = JSON.parse(window.localStorage.getItem(twitterKey));
      if (myToken === '' || myToken === null) {
        $cordovaOauth.twitter(clientId, clientSecret).then(function (succ) {
          myToken = succ;
          window.localStorage.setItem(twitterKey, JSON.stringify(succ));
          $twitterApi.configure(clientId, clientSecret, succ);
          $scope.showHomeTimeline();
        }, function(error) {
          console.log(error);
        });
      } else {
        $twitterApi.configure(clientId, clientSecret, myToken);
        $scope.showHomeTimeline();
      }
    });
    $scope.showHomeTimeline = function() {
  $twitterApi.getHomeTimeline().then(function(data) {
    $scope.home_timeline = data;
  });
};

$scope.submitTweet = function() {
  $twitterApi.postStatusUpdate($scope.tweet.message).then(function(result) {
    $scope.showHomeTimeline();
  });
}

$scope.doRefresh = function() {
  $scope.showHomeTimeline();
  $scope.$broadcast('scroll.refreshComplete');
};

$scope.correctTimestring = function(string) {
  return new Date(Date.parse(string));
};

});
