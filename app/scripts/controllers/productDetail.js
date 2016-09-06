'use strict';

angular.module('myAppApp')
  .controller('productDetailCtrl', function ($scope, product, $uibModalInstance) {
    $scope.product = product;

    $scope.cancel = function () {
	    $uibModalInstance.dismiss('cancel');
	};

	$scope.submit = function () {
     	$uibModalInstance.close($scope.product);
	};
  });
