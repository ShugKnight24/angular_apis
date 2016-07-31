var app = angular.module('apiApp', ["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl:"partials/dog.html",
		controller: "dogCtrl"
		})
	.when('/dog',{
		templateUrl:"partials/dog.html",
		controller: "dogCtrl"
		})
	.when('/cat',{
		templateUrl:"partials/cat.html",
		controller:"catCtrl"
		})
	.when('/jenn',{
		templateUrl:"partials/jenn.html",
		controller:"jennController"
		})
	.otherwise({
		redirect:"/dog"
	});
});