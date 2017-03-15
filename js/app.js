console.log("We're connected...");
/* setup your angular app here */
var app = angular.module("FruitsAndVeg", []);
app.controller("fruitOrVeg", ["$scope", function($scope){
  $scope.fruits = fruits;
  $scope.vegetables = vegetables;
  $scope.combined= fruits.concat(vegetables).sort();
  $scope.guessedFruits = [];
  $scope.guessedVeg = [];
  $scope.danger = {"text": false};

  $scope.addFruit = function(){
    console.log("Added to fruits");
    $scope.guessedFruits.push($scope.combined.splice(this.$index, 1).toString())
      $scope.guessedFruits.sort();
    console.log($scope.guessedFruits);
    if ($scope.combined.length == 0){
      $scope.checkFruits();
      $scope.checkVeg();
    }
  }

  $scope.addVeg = function(){
    console.log("Added to veggies");
    $scope.guessedVeg.push($scope.combined.splice(this.$index, 1).toString())
    $scope.guessedVeg.sort();
    console.log($scope.guessedVeg);
    if ($scope.combined.length == 0){
      $scope.checkFruits();
      $scope.checkVeg();
    }
  }

  $scope.checkFruits = function(){
    console.log($scope.fruits == $scope.guessedFruits);
    for (var i = 0; i < $scope.guessedFruits.length; i++) {
      if ($scope.fruits[i] == $scope.guessedFruits[i]){
        console.log("true");
        // return true;
      }else{
        console.log("false");
        $scope.guessedFruits[i]($scope.danger.text = true);
        // return false;
      };
    }
  }

    $scope.checkVeg = function(){
      for (var i = 0; i < $scope.guessedVeg.length; i++) {
        if ($scope.vegetables[i] == $scope.guessedVeg[i]){
          console.log("true");
          // return true;
      }else{
        console.log("false");
        $scope.guessedVeg[i]($scope.danger.text = true);
        // return false;
      };
    }
  }

}])

