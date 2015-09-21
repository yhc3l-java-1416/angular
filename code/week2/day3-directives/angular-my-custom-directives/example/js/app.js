angular.module("directiveExampleApp", ['myCustomDirectives']).
controller('MainCtrl', function ($scope) {
	$scope.people = [{
		firstname: 'Tom',
		surname: 'Blackmore',
		age: 38,
		occupation: 'Consultant'
	}, {
		firstname: 'Fred',
		surname: 'Foster',
		age: 24,
		occupation: 'Plumber'
	}, {
		firstname: 'Ginny',
		surname: 'Weasley',
		age: 15,
		occupation: 'Witch'
	}];
});