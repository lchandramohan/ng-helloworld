var app=angular.module("helloworldapp",[]);

app.controller("helloworldcontroller", function($scope){
  $scope.description = "This is my first Hello World Application in AngularJS.";
  $scope.todayDate = new Date();
  $scope.currencyFormat = 513600;
});
