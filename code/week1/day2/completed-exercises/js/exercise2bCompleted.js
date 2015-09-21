var app = angular.module('class', []);
app.controller('ClassCtrl', function ($scope) {
	$scope.isGreen = function () {
		return ($scope.text === 'green');
	};
});