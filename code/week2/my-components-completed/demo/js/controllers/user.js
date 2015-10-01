'use strict';
angular.module('myComponentsDemo')
	.controller('UserCtrl', function ($scope) {
		$scope.tom = {
			name: 'tom',
			nickname: 'big red'
		};
		$scope.bob = {
			name: 'bob',
			nickname: 'hairy bob'
		};
	});