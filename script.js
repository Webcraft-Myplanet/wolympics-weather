var app = angular.module('weatherApp', []);

var weatherCtrl = function ($scope, $http) {
  $scope.thing = 123;

  $http.get('/ajax/weather.json').success(function(data){
    console.log(data);
    $scope.cities = data.cities;
  });
};
