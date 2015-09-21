'use strict';
var app = angular.module('form', []);
app.controller('formCtrl', function ($scope) {
	$scope.formData = {};
	$scope.result = {};
	$scope.carMakes = ['Volvo', 'VW', 'Mercedes', 'Kia', 'Ford', 'Opel'];
	$scope.regex = {};
	$scope.regex.alphanumeric = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
	$scope.regex.postcode = /^\d{3} \d{2}$/;
	$scope.maxDate = new Date(new Date().setDate(new Date().getDate() - 6570));
	$scope.sendForm = function () {
		$scope.result = angular.copy($scope.formData);
		$scope.formData = {};
		$scope.testForm.$setPristine(true);
	};
});