'use strict';

angular.module('myAppApp')
  .controller('MoviesCtrl', function ($scope, movieFactory) {
    $scope.search = function() {
    	movieFactory.search($scope.movie).then(function(response) {
    		if(response && response.data && response.data.Search)
    			$scope.movies = response.data.Search;
    	});
    };
  });
