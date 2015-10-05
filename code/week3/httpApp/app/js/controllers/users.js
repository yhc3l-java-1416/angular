'use strict';
angular.module('myApp')
	.controller('UsersCtrl', function ($scope, usersDb) {
		$scope.users = [{
			id: 0,
			name: 'fred'
		}, {
			id: 1,
			name: 'tom'
		}];


		$scope.createUser = function (name) {
			var user = {
				name: name,
				id: $scope.users.length
			};
			$scope.users.push(user)
		};

		$scope.removeUser = function (id) {
			$scope.users = $scope.users.filter(function (el) {
				return el.id !== id;
			});
		};

	});