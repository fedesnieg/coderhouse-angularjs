angular.module("myAppApp").factory("movieFactory", function($http) {
  var api = {};

  api.search = function(search) {
    return $http.get('http://www.omdbapi.com/', { params: { s: search.title, y: search.year, type: "movie" }});
  };

  api.get = function(id) {
    return $http.get('http://www.omdbapi.com/', { params: { i: id }});
  };

  return api;
});