
var app = angular.module('App', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when('/', {
		templateUrl: '../pages/login/login.html',
		controller: 'LoginController'
	})
	.when('/home', {
		templateUrl: "../pages/home/home.html",
		controller: "HomeController"
	})
	.when('/filtro',{
		templateUrl: '../pages/filter/filter.html',
		controller: 'FilterController'
	})
	.when('/transferencias/:id',{
		templateUrl: '../pages/transfer-details/transfer-details.html',
		controller: 'TransferDetailsController'
	})
	.when('/transferencias', {
		templateUrl: '../pages/transfer-list/transfer-list.html',
		controller: 'TransferListController'
	})
	.otherwise({redirectTo: '/'});

	$locationProvider.html5Mode(true);
});

