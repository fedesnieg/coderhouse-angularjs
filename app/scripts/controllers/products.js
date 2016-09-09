'use strict';

angular.module('myAppApp')
  .controller('ProductsCtrl', function ($scope, productFactory, $uibModal, $filter, maxStock, $route, personService, lang) {
    $scope.products = productFactory.get();
    
    $scope.lang = lang;

    productFactory.traemeAlgo = function() {
        return "hola";
    }

    $scope.clients = [
    	{id: 1, name: 'Fede', apellido: 'Snieg'},
    	{id: 2, name: 'Macri', apellido: 'Matias'},
    	{id: 3, name: 'Diego', apellido: 'Villagran'}
    ];

    personService.setNombre("diego");
    personService.setApellido("villagran");

    $scope.person1 = personService.getPersona();

    personService.setNombre("matias");
    personService.setApellido("macri");

    $scope.person2 = personService.getPersona();

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
