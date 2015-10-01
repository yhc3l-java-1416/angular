'use strict';
angular.module('myComponentsDemo', [
	'ngRoute',
	'myComponents'
]).config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/menu.html',
			controller: 'MenuCtrl',
		})
		.otherwise({
			redirectTo: '/'
		});
});