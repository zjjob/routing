angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {

      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {


  $stateProvider


  //   .state('tab', {
  //   url: '/tab',
  //   abstract: true,
  //   templateUrl: '/templates/tabs.html'
  // })

  // Each tab has its own nav history stack:
  .state('reg',{
    url:'/reg',
    templateUrl:'templates/reg.html',
    controller:'regcontro'
  })
  .state('logo',{
    url:'/logo',
    templateUrl:'templates/logo.html',
    controller:'logocontro'
  })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/reg');

});
