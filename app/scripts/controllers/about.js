'use strict';

/**
 * @ngdoc function
 * @name myAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myAppApp
 */
angular.module('myAppApp')
  .controller('AboutCtrl', function ($scope, productFactory, personService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.$watch('nombre', function(newVal, oldVal){
    	if(newVal === "fede")
			alert(newVal);
    });

    console.log(personService);
  });
