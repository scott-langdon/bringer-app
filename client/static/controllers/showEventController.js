app.controller('showEventController', ['$scope','$location','userFactory', 'showEventFactory', '$routeParams', function($scope, $location, userFactory, showEventFactory, $routeParams){
    $scope.currentUser = {};

    userFactory.getCurrentUser(function(user){
        $scope.currentUser= user;
    });

    function getOneEvent(){
        showEventFactory.index($routeParams.id,function(res){
            $scope.event = res.data
        })
    }
    getOneEvent();

}])