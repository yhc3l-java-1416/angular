'use strict';
var app = angular.module('todoList', []);
app.controller('todoCtrl', function ($scope) {
	$scope.items = [{
		description: 'buy sweets',
		done: false
	}];

	$scope.addItem = function (item) {
		var newItem = {
			description: item,
			done: false
		};
		$scope.items.push(newItem);
	};

	$scope.incompleteCount = function () {
		var i, count = 0;
		for (i = 0; i < $scope.items.length; i = i + 1) {
			if (!$scope.items[i].done) {
				count = count + 1;
			}
		}
		return count;
	};

	$scope.showIncompleteCount = function () {
		return $scope.incompleteCount() !== 0;
	};
});