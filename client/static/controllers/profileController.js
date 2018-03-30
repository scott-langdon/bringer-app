app.controller('profileController', ['$scope','$location','userFactory', 'profileFactory', function($scope, $location, userFactory, profileFactory){
    $scope.currentUser = {};

    userFactory.getCurrentUser(function(user){
        $scope.currentUser= user;
    });
    
    $scope.logout = function(user, isValid){
        userFactory.logout(function() {
        $scope.currentUser = {};
        $location.url('/');
        });    
    }

    function updateQuestions() {
        profileFactory.index(function(res) {
            $scope.questions = res.data; 
            console.log(res.data)
        })
    }
    updateQuestions();

}])