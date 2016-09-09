'use strict';

angular.module('myAppApp')
  .controller('MovieDetailCtrl', function ($scope, movieFactory, $routeParams) {
    movieFactory.get($routeParams.id).then(function(response){
    	if(response && response.data)
    		$scope.movie = response.data;
    });
  });
