'use strict';

angular.module('myAppApp')
  .filter('snakeCase', function ($filter) {
  		return function(value, delimiter) {
  			delimiter = delimiter || "_";
  			var valueFormatted = $filter('lowercase')(value);

  			return valueFormatted.replace(/ /g, delimiter);
  		}
  });
