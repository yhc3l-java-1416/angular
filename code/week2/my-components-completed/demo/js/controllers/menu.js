'use strict';
angular.module('myComponentsDemo')
	.controller('MenuCtrl', function ($scope, $window) {
		$scope.goto = function (page) {
			$window.location.href = '#/' + page;
		};
	});