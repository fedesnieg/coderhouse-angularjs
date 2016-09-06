'use strict';

angular.module('myAppApp')
  .controller('ProductsCtrl', function ($scope, productService, $uibModal, $filter) {
    $scope.products = productService.get();

    $scope.edit = function(product) {
    	var modalInstance = $uibModal.open({
	      templateUrl: 'views/productDetail.html',
	      controller: 'productDetailCtrl',
	      resolve: {
	        product: angular.copy(product)
	      }
	    });

	    modalInstance.result.then(function (modifiedProduct) {
	      productService.update(product.id, modifiedProduct);
 		});
    };

    $scope.remove = function(productId) {
    	productService.remove(productId);
    };

  });
