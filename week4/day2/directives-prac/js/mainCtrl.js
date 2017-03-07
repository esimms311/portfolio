angular.module('myApp')
.controller('mainCtrl', function($scope) {
$scope.add = function(a, b) {
  $scope.result = parseInt(a) + parseInt(b);
}
$scope.subtract = function(a, b){
  $scope.result = parseInt(a) - parseInt(b);
}
$scope.multiply = function(a, b){
  $scope.result = parseInt(a) * parseInt(b);
}
$scope.divide = function(a, b){
  $scope.result = parseInt(a) / parseInt(b);
}
})
