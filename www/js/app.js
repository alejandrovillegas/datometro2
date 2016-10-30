// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

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
});
angular.module('ionicApp', ['ionic'])

  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('intro', {
        url: '/',
        templateUrl: 'templates/intro.html',
        controller: 'IntroCtrl'
      })
      .state('main', {
        url: '/main',
        templateUrl: 'templates/main.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise("/");

  })

  .controller('IntroCtrl', function($scope, $state, $ionicSlideBoxDelegate) {

    // Called to navigate to the main app
    $scope.startApp = function() {
      $state.go('main');
    };
    $scope.next = function() {
      $ionicSlideBoxDelegate.next();
    };
    $scope.previous = function() {
      $ionicSlideBoxDelegate.previous();
    };

    // Called each time the slide changes
    $scope.slideChanged = function(index) {
      $scope.slideIndex = index;
    };
  })

  .controller('MainCtrl', function($scope, $state) {
    //console.log('MainCtrl');

    $scope.data1 = { 'volume' : '0' };
    $scope.data2 = { 'volume' : '0' };
    $scope.data3 = { 'volume' : '0' };
    $scope.data4 = { 'volume' : '0' };
    $scope.data5 = { 'volume' : '0' };
    $scope.data6 = { 'volume' : '0' };
    $scope.data7 = { 'volume' : '0' };
    $scope.sumaMb = 0;
    $scope.suma = 0;

    $scope.sumaChanged =  function(){

      $scope.sumaMb =  (parseInt($scope.data1.volume)* 0.3)+
        (parseInt($scope.data2.volume)* 2)+
        (parseInt($scope.data3.volume)* 4)+
        (parseInt($scope.data4.volume)* 30)+
        (parseInt($scope.data5.volume)* 0.02)+
        (parseInt($scope.data6.volume)* 5)+
        (parseInt($scope.data7.volume)* 4);

      $scope.suma =  parseFloat((($scope.sumaMb / 1024)*100)/100).toFixed(2);

    };



    $scope.toIntro = function(){
      $state.go('intro');
    }
  });
var fileContent = '';
switch(ionic.Platform.isAndroid()) {
  case true:
    fileContent = 'file:///android_asset/www';
    break;
  case false:
    fileContent = 'i18n';
    break;
}



