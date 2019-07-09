(function() {
  "use strict";

  angular
    .module("App", [])

    .controller("AppController", [
      "$scope",
      function($scope) {
        $scope.items = [];
        $scope.message = "";

        $scope.splitItems = function() {
          if ($scope.items === "") return "Please enter data first";

          return $scope.items.split(",");
        };

        $scope.check = function() {
          var itemsArray = $scope.splitItems();
          var count = 0;

          for (var i = 0; i < itemsArray.length; i++) {
            if (itemsArray[i].trim() !== "") count++;
          }

          $scope.message = count > 3 ? "Too much!" : "Enjoy!";
        };
      }
    ]);
})();
