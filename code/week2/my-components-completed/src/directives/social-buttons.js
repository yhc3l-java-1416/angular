'use strict';
angular.module('myComponents')
	.directive('mySocialButtons', function () {
		return {
			restrict: 'E',
			template: '<div class="button-group">' +
				'<a href="http://facebook.com"><button>facebook</button></a>' +
				'<a href="http://twitter.com"><button>twitter</button></a>' +
				'</div>'
		};
	});