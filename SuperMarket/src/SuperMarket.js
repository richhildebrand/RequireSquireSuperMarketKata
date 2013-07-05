define([],
function() {
	'use strict';

	var buyBread = function(itemsToBuy) {
		var quantity = itemsToBuy['loafsOfBread'];
		return (quantity) ? quantity : 0;
	};

	var buyNoodles = function(itemsToBuy) {
		var quantity = itemsToBuy['noodles'];
		return (quantity) ? quantity * .5 : 0;
	};

	var buySoup = function(itemsToBuy) {
		var quantity = itemsToBuy['cansOfSoup'];
		return (quantity) ? quantity * 2 : 0;
	};

	var formatPrice = function(price) {
		price = '$' + price;
		return _needsZero(price) ? price + '0' : price;
	};

	// Brendan would love this method name!
	var _needsZero = function(price) {
		return (price.indexOf(".") != -1)
	}

	var SuperMarket = function(itemsToBuy) {
		var zeroToAppendForDecimals = '0';
		var totalPrice = 0;

		totalPrice = buyBread(itemsToBuy);
		totalPrice += buyNoodles(itemsToBuy); 
		totalPrice += buySoup(itemsToBuy);
		return formatPrice(totalPrice);
	};

	return {
		SuperMarket : SuperMarket,
		buyBread : buyBread,
		buyNoodles : buyNoodles,
		buySoup : buySoup,
		formatPrice : formatPrice
	};

});