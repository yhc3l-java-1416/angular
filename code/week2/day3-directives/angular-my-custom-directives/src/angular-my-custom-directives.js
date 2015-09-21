angular.module('myCustomDirectives', []).
directive('mySocialButtons', function () {
	return {
		restrict: 'E',
		template: '<div class="button-group">' +
			'<a href="#"><button>facebook</button></a>' +
			'<a href="#"><button>twitter</button></a>' +
			'<a href="#"><button>google plus</button></a>' +
			'</div>'
	};
}).
directive('myPerson', function () {
	return {
		restrict: 'E',
		scope: {
			person: '='
		},
		template: '<h3 ng-click="alertName()">{{ person.firstname }} {{ person.surname}} </h3>' +
			'<table>' +
			'<tr>' +
			'<td>age:</td>' +
			'<td>{{ person.age }}</td>' +
			'</tr>' +
			'<tr>' +
			'<td>occupation:</td>' +
			'<td>{{ person.occupation }}</td>' +
			'</tr>' +
			'</table>',
		controller: function ($scope) {
			$scope.alertName = function () {
				alert($scope.person.firstname);
			};
		}
	};
}).
directive('mySelectAllOnFocus', function () {
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
}).
directive('myPageHeading', function () {
	return {
		restrict: 'E',
		transclude: true,
		replace: true,
		template: '<div class="page-header">' +
			'<div ng-transclude></div>' +
			'</div>'
	};
});