'use strict';
angular.module('myComponents')
	.directive('myUser', function () {
		return {
			restrict: 'E',
			scope: {
				user: '='
			},
			templateUrl: 'src/directives/user.html',
			controller: ['$scope', function ($scope) {
				$scope.warn = function () {
					alert('Watch out' + $scope.user.nickname);
				};
			}]
		};
	});