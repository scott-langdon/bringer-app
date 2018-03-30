app.controller('loginController', ['$scope','$location','userFactory', function($scope, $location, UserFactory){
    $scope.loginErr = "";
    $scope.regErr = "";

    $scope.create = function(user, isValid){
        if(isValid){
            UserFactory.create(user,function(res){
                if(res.data.duplicate){
                    $scope.regErr = "Username must be unique";
                } else {
                    $location.url('/profile');
                }
            })
        } else{
            $scope.regErr = "Invalid Combination";
        }
    }
    $scope.login = function(user, isValid){
        if (isValid){
            UserFactory.login(user,function(){
                $location.url('/events');
            })
        } else {
            $scope.loginErr = "Invalid Combination";
        }
    }
}])
