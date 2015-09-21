angular.module('customFilters', []).
filter('titlecase', function () {
	return function (input) {
		var output;

		function arrayToTitleCase(input, seperator) {
			var i,
				words = input.split(seperator),
				output = '';

			for (i = 0; i < words.length; i = i + 1) {
				words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1, words[i].length);
			}
			output = words.join(seperator);
			return output;
		}

		if (angular.isString(input)) {
			input = input.toLowerCase();
			output = arrayToTitleCase(input, ' ');
			output = arrayToTitleCase(output, '-');
			return output;
		} else {
			return input;
		}
	};
}).
filter('unique', function () {
	return function (input) {
		var i, output = [];
		if (angular.isArray(input)) {
			for (i = 0; i < input.length; i = i + 1) {
				if (output.indexOf(input[i]) === -1) {
					output.push(input[i]);
				}
			}
			return output;
		} else {
			return input;
		}
	};
});