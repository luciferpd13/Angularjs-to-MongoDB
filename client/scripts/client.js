

var app = angular.module("myApp", []);
app.controller("Controller", function ($scope, $http) {
  $scope.locations = [];

  $scope.addLocation = function () {
    if (this.locationAdress) {
      $scope.locations.push($scope.locationAdress);

      if ($scope.locations.length >= 2) {
        $scope.locations1 = $scope.locations.slice(2);
      }

      
      $http({
        method: "GET",
        url: "/location",
        params: {city : $scope.locationAdress}
      }).then(function mySuccess(response) {
            console.log(response);
        }, function myError(response) {
          console.log(response);
      });
    
      $scope.locationAdress = null;


      
    }
  };
})