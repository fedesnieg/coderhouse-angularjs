'use strict';

angular.module('myAppApp')
  .directive('myDirective', function () {
    return {
      //template: 'Hola {{nombre}} {{apellido}} ! Esta es una directiva.' 
      templateUrl: 'scripts/directives/myDirective/myDirective.html',
      restrict: 'A',
      scope: {
      	person: '=',
      	onClickHandler: '&'
      }
    };
  });
