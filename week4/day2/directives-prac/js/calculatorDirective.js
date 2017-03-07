angular.module('myApp')
.directive('calculator', function() {
  return {
    restrict: 'AE',
    scope: {
      text: '@',
      calc: '&',
      num1: '='
    },
    // A is attribute and E equals element
    templateUrl: '../calculator.html',
    controller: function($scope) {
      $scope.num2 = 0;
    }
  }
})
