angular.module('starter.controllers', [])

.controller('regcontro', function($scope,$state) {
    $scope.reg1=function(){
      $state.go('logo');
    }
})
.controller('logocontro',function($scope,$state){
    $scope.back=function(){
      $state.go('reg');
    }
})
