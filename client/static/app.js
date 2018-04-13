// front end routings 
var app = angular.module('appName', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'ngSanitize', 'datetime']);

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
        .when('/register', {
            templateUrl:'partials/register.html',
            controller:'loginController'
        })
        .when('/events', {
            templateUrl:'partials/events.html',
            controller:'eventController'
        })
        .when('/profile', {
            templateUrl:'partials/profile.html',
            controller: 'profileController'
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
        .when('/event/:id', {
            templateUrl:'partials/showEvent.html',
            controller: 'showEventController'
        })
        .otherwise({
            redirectTo:'/'
        })
});