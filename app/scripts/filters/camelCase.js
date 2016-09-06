'use strict';

angular.module('myAppApp')
  .filter('camelCase', function ($filter) {
  		return function(value) {
  			var words = value.split(" "),
  			valueFormatted;
  				
  			if(words && words.length) {
	  			valueFormatted = $filter('lowercase')(words.shift());
	  			angular.forEach(words, function(word) {
	  				valueFormatted += word.substr(0, 1).toUpperCase() + word.substr(1);
	  			});

	  			return valueFormatted;
  			} else {
  				return value;
  			}
  		}
  });
