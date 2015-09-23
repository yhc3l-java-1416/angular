'use strict';
app.factory('phoneData', function phoneDataFactory() {
	var people = data;
	return {
		getAllData: function () {
			return people;
		},
		getById: function (id) {
			for (var i = 0; i < people.length; i++) {
				if (people[i].id === id) {
					return people[i];
				}
			}
		}
	};
});