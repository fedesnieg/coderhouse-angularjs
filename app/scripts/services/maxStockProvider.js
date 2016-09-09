angular.module("myAppApp").provider("maxStock", function() {
  var value;

  return {
      setMaxStock : function(maxStock) {
        value = maxStock;
      },
      $get: function() {
        return {
          stockLimit: "El valor máximo es: " + value
        }
      }
  };

});