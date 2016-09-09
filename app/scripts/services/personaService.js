var app = angular.module("myAppApp");

function personaService() {
    this.nombre = "";
    this.apellido = "";

    this.setNombre = function(nombre) {
      this.nombre = nombre;
    };

    this.setApellido = function(apellido) {
      this.apellido = apellido;
    };

    this.getPersona = function() {
      return  {
        name: this.nombre,
        text: this.apellido
      };
    };
};



app.service("personService", personaService);