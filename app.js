( function() {
'use strict';

    angular.module("myFirstApp",[])

    .controller("myFirstController", function($scope) {
        $scope.firstName = "Navonil";

        $scope.lastname = function() {
            return "Roy";
        };

        $scope.address = "AG 135/1";
        $scope.name = "";
        $scope.numvalue = 0;

        $scope.calculateNumericValue = function() {
            var total = 0;
            for(var i=0; i<$scope.name.length; i++) {
                total += $scope.name.charCodeAt(i);
            };
            $scope.numvalue = total;
        };

    } );

} )();