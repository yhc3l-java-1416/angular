'use strict';
angular.module('myComponents')
	.directive('mySocialButtons', function () {
		return {
			restrict: 'E',
			templateUrl: 'src/directives/social-buttons.html'
		};
	});