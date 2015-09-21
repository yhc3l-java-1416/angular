'use strict';
app.controller('PhoneListCtrl', function ($scope, phoneData) {
	$scope.phones = phoneData.getAllData();
});
app.controller('PhoneDetailCtrl', function ($scope, $routeParams, phoneData) {
	$scope.phone = phoneData.getById($routeParams.phoneId);
});