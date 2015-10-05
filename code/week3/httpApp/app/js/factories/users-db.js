'use strict';
angular.module('myApp')
	.factory('usersDb', function ($http) {
		var serviceUrl = 'http://api.arctictiger.se/v1/users';
		return {
			getAll: function () {
				return $http.get(serviceUrl);
			},
			add: function (user) {
				return $http.post(serviceUrl, user);
			},
			remove: function (id) {
				return $http.delete(serviceUrl + '/' + id);
			}
		};
	});