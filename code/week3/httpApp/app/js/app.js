'use strict';
angular.module('myApp', [
	'ngRoute'
]).config(function ($routeProvider) {
	$routeProvider
		.when('/users', {
			templateUrl: 'views/users.html',
			controller: 'UsersCtrl'
		})
		.otherwise({
			redirectTo: '/users'
		});
});