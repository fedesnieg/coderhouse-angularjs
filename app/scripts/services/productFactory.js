angular.module("myAppApp").factory("productFactory", function(productTypeFactory) {
  var service = {};

  var products = [
      {name: 'Detergente', stock: 25, price: 10, id: 1, tipo: 1},
      {name: 'Notebook', stock: 15, price: 5000, id: 2, tipo: 2},
      {name: 'Lavandina', stock: 150, price: 10, id: 3, tipo: 1},
      {name: 'Foto con autógrafo', stock: 1, price: 500, id: 4, tipo: 3}
    ];

  service.get = function() {
    //return $http.get(baseURL + url, config);
    angular.forEach(products, function(producto) {
        producto.tipoNombre = productTypeFactory.getNameById(producto.tipo);
    });
    return products;
  };

  service.update = function(id, modifiedProduct) {
    angular.forEach(products, function(product, i){
      if(product.id === id)
        products[i] = modifiedProduct;
    });
  };

  service.remove = function(productId) {
    angular.forEach(products, function(product, i){
      if(product.id === productId)
        products.splice(i, 1);
    });
  };

  return service;
});