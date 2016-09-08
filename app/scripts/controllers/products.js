'use strict';

angular.module('myAppApp')
  .controller('ProductsCtrl', function ($scope, productService, $uibModal, $filter) {
    $scope.products = productService.get();

    $scope.clients = [
    	{id: 1, name: 'Fede', apellido: 'Snieg'},
    	{id: 2, name: 'Macri', apellido: 'Matias'},
    	{id: 3, name: 'Diego', apellido: 'Villagran'}
    ];

    $scope.person1 = {
    	name: 'Diego',
    	text: 'Hola!'
    };

    $scope.person2 = {
    	name: 'Matias',
    	text: 'Que haces!'
    };

    $scope.showAlert = function() {
    	alert("hola!");
    };

    $scope.editProduct = function(product) {
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

    $scope.removeProduct = function(productId) {
    	productService.remove(productId);
    };

    $scope.editClient = function(client) {
    	alert("No se implementó la funcion. Estamos editando: " + JSON.stringify(client));
    };

    $scope.removeClient = function(clientId) {
    	alert("No se implementó la funcion. Estamos eliminando: " + clientId);
    };

  });
