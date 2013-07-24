define([],
function() {
	'use strict';

		
	var _hasDecimal = function(price) {
		return (price.toString().indexOf(".") != -1);
	};

	var PriceFormatter = {

		formatPrice: function(price) {
			if(_hasDecimal(price)) { 
				price = price.toFixed(2);
			}
			return '$' + price;
		}
	}
	return PriceFormatter;
});