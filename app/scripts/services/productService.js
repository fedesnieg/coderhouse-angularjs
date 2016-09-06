angular.module("myAppApp").service("productService", function() {
  var service = {};

  var products = [
      {name: 'Libro', stock: 25, price: 100, id: 1},
      {name: 'CD', stock: 15, price: 50, id: 2},
      {name: 'Poster', stock: 150, price: 10, id: 3},
      {name: 'Foto con autógrafo', stock: 1, price: 500, id: 4}
    ];

  service.get = function() {
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