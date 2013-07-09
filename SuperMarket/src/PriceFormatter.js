define([], 
function () {
	'use strict';
	
	var formatPrice = function(price) {
		price = '$' + price;
		return _needsZero(price) ? price + '0' : price;
	};

	var _needsZero = function(price) {
		return (price.indexOf(".") != -1)
	};

	return {
		formatPrice : formatPrice,
		_needsZero : _needsZero
	}
});