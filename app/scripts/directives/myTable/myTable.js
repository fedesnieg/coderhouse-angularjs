'use strict';

angular.module('myAppApp')
  .directive('myTable', function () {
    return {
      templateUrl: 'scripts/directives/myTable/myTable.html',
      restrict: 'A',
      scope: {
        rows: '=',
        editFc: '&',
        removeFc: '&'
      }
    };
  });
