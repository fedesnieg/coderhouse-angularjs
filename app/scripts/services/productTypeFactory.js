angular.module("myAppApp").factory("productTypeFactory", function(productTypes) {
  var api = {};

  api.getNameById = function(id) {
    var name; 
    angular.forEach(productTypes, function(element){
        if(element.id === id)
          name = element.tipo;
    });

    return name || "- Desconocido -";
  };

  return api;
});