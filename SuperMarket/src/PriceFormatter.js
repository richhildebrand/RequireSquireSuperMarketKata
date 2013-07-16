define([],
function() {
	'use strict';

		
	var _needsZero = function(price) {
		return (price.indexOf(".") != -1);
	};

	var PriceFormatter = {

		formatPrice: function(price) {
			price = '$' + price;
			return _needsZero(price) ? price + '0' : price;
		},
	}
	return PriceFormatter;
});