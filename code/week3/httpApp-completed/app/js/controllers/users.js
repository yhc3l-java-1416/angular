'use strict';
angular.module('myApp')
	.controller('UsersCtrl', function ($scope, usersDb) {
		function onError(res) {
			console.log('Error', res);
		}

		function getUsers() {
			usersDb.getAll()
				.then(function (res) {
					$scope.users = res.data;
				}, onError);
		}

		getUsers();

		// Poll server, a bad way of getting changes in near realtime.
		// Google long polling or web sockets for a better way of achieving this
		setInterval(getUsers, 500);

		$scope.createUser = function (name) {
			var user = {
				name: name
			};
			usersDb.add(user)
				.then(getUsers, onError);
		};

		$scope.removeUser = function (id) {
			usersDb.remove(id)
				.then(getUsers, onError);
		};

	});