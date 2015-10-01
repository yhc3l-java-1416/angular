'use strict';
angular.module('myComponents')
	.directive('mySelectAllOnFocus', function () {
		return {
			restrict: 'A',
			link: function (scope, element) {
				element.mouseup(function (event) {
					event.preventDefault();
				});
				element.focus(function () {
				element.select();
				});
			}
		};
	});