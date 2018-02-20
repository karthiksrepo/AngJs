'use strict'

LearnApp.controller("LearnController", ['$scope', function($scope) {

    var items = ['Aswathy', 'Diya', 'Karthik', 'Dad', 'Mom'];

    $scope.content = {
      itmIdx: null,
      leftop: null,
      rightop: null,
      result: null,
      curItem: ''
    };

    $scope.getItem = function() {
      $scope.content.curItem = items[($scope.content.itmIdx-1)];
      console.log($scope.content.itmIdx, $scope.content.curItem);
    };

    $scope.addNumbers = function() {
      $scope.content.result = $scope.content.leftop + $scope.content.rightop;
      console.log($scope.content.leftop, $scope.content.rightop, $scope.content.result);
    };

    $scope.subNumbers = function() {
      $scope.content.result = $scope.content.leftop - $scope.content.rightop;
      console.log($scope.content.leftop, $scope.content.rightop, $scope.content.result);
    };

    $scope.mulNumbers = function() {
      $scope.content.result = $scope.content.leftop * $scope.content.rightop;
      console.log($scope.content.leftop, $scope.content.rightop, $scope.content.result);
    };

    $scope.divNumbers = function() {
      $scope.content.result = $scope.content.leftop / $scope.content.rightop;
      console.log($scope.content.leftop, $scope.content.rightop, $scope.content.result);
    };


}]);
