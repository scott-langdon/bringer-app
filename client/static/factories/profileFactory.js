app.factory('profileFactory', ['$http', function($http) {
  return {
    index: function(callback) {
      $http({
        url: '/getQuestions',
        method: 'get'
      }).then(callback);
    }
  }
}]);