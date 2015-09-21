describe('titlecase filter', function () {
	beforeEach(angular.mock.module('customFilters'));
	it('should convert words seperated by a space to titlecase', function () {
		angular.mock.inject(function (titlecaseFilter) {
			expect(titlecaseFilter('HeLLo wOrld fROM Tom')).toEqual('Hello World From Tom');
		});
	});
	it('should convert words seperated by a hyphen to titlecase', function () {
		angular.mock.inject(function (titlecaseFilter) {
			expect(titlecaseFilter('mary-lo')).toEqual('Mary-Lo');
		});
	});
});