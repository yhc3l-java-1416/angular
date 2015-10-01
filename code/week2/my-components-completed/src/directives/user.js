'use strict';
angular.module('myComponents')
	.directive('myUser', function () {
		return {
			restrict: 'E',
			scope: {
				user: '='
			},
			template: '<div>' +
				'<h2>User: {{user.name}} </h2>' +
				'<p ng-click="warn()">Welcome back {{user.nickname}} </p>' +
				'</div>',
			controller: function ($scope) {
				$scope.warn = function () {
					alert('Watch out' + $scope.user.nickname);
				};
			}
		};
	});