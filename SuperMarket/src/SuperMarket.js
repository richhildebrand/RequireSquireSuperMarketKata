define([],
function() {
	'use strict';

	var SuperMarket = function(loafsOfBread) {
		if (loafsOfBread < 5) { return '$1' }
		return "$" + loafsOfBread.toString();

	};

	return SuperMarket;

});