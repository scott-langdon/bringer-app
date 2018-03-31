app.factory('showEventFactory', ['$http', function($http) {
  return {
    index: function(id, callback) {
      $http({
        url: '/getOneEvent/'+id,
        method: 'get'
      }).then(callback);
    }
  }
}]);