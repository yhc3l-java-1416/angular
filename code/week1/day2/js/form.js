'use strict';
var app = angular.module('form', []);
app.controller('formCtrl', function ($scope) {
	$scope.formData = {};
	$scope.regex = {};
	$scope.regex.alphanumeric = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;

	$scope.sendForm = function () {
		$scope.formData = {};
		$scope.testForm.$setPristine(true);
	};
});