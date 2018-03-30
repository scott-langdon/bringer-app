app.factory('eventFactory', ['$http', function($http) {
  return {
    index: function(callback) {
      $http({
        url: '/getEvents',
        method: 'GET'
      }).then(callback);
    },
    create: function(event, callback) {
      $http({
        url: '/new_event',
        method: 'POST',
        data: event
      }).then(callback);
    }
  }
}]);