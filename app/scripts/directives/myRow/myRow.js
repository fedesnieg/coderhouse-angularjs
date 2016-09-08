'use strict';

angular.module('myAppApp')
  .directive('myRow', function () {
    return {
      templateUrl: 'scripts/directives/myRow/myRow.html',
      restrict: 'A',
      scope: {
      	data: '=',
        editFc: '&',
        removeFc: '&'
      }
    };
  });
