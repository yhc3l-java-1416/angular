describe('unique filter', function () {
	beforeEach(angular.mock.module('customFilters'));
	it('returns an array with duplicates removed', function () {
		angular.mock.inject(function (uniqueFilter) {
			expect(uniqueFilter(['Tom', 'Fred', 'George', 'Harry', 'Tom'])).toEqual(['Tom', 'Fred', 'George', 'Harry']);
		});
	});
});