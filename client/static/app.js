// front end routings 
var app = angular.module('appName', ['ngRoute', 'ngAnimate', 'ui.bootstrap']);

app.directive('register', function() {
  return {
    templateUrl: 'register.html'
  };
});

app.config(function($routeProvider, $httpProvider){
    $httpProvider.interceptors.push(
        function($q, $location) {
            return {
                'responseError':function(rejection){
                    if (rejection.status == 401){
                        $location.url('/login');
                    }
                    return $q.reject(rejection);
                }
            };
        }
    );
    $routeProvider
        .when('/', {
            templateUrl:'partials/login.html',
            controller:'loginController'
        })
        .when('/landing', {
            templateUrl:'partials/landing.html',
            // controller:'loginController'
        })
        .when('/dashboard', {
            templateUrl:'partials/dashboard.html',
            controller: 'dashboardController'
        })
        .when('/new_question', {
            templateUrl:'partials/question.html',
            controller: 'questionController'
        })
        .when('/question/:id', {
            templateUrl:'partials/show.html',
            controller: 'showController'
        })
        .when('/question/:id/new_answer', {
            templateUrl:'partials/answer.html',
            controller: 'answerController'
        })
        .otherwise({
            redirectTo:'/'
        })
});