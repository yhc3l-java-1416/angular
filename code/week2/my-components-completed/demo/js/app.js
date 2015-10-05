'use strict';
angular.module('myComponentsDemo', [
	'ngRoute',
	'myComponents'
]).config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/menu.html',
			controller: 'MenuCtrl'
		})
		.when('/directives/select-all-on-focus', {
			templateUrl: 'views/directives/select-all-on-focus.html',
			controller: 'SelectAllOnFocusCtrl'
		})
		.when('/directives/social-buttons', {
			templateUrl: 'views/directives/social-buttons.html',
			controller: 'SocialButtonsCtrl'
		})
		.when('/directives/user', {
			templateUrl: 'views/directives/user.html',
			controller: 'UserCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
});