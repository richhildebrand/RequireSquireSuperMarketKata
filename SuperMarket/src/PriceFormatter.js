define([], 
function () {
	'use strict';

	var PriceFormatter = {

		formatPrice: function(price) {
			price = '$' + price;
			return this._needsZero(price) ? price + '0' : price;
		},

		_needsZero: function(price) {
			return (price.indexOf(".") != -1)
		}
	}

	return PriceFormatter;
});