define([],
function() {
	'use strict';

	var buyBread = function(itemsToBuy, orderResult) {
		var quantity = itemsToBuy['loafsOfBread'];
		var costOfItem = (quantity) ? quantity : 0;
		orderResult.totalPrice += costOfItem 
		orderResult.receipt += (costOfItem) ? 'loafsOfBread: ' + formatPrice(costOfItem ) : "";
		return orderResult;
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
		var orderResult = { totalPrice: 0, receipt: ""};

		orderResult = buyBread(itemsToBuy, orderResult);
		orderResult.totalPrice += buyNoodles(itemsToBuy); 
		orderResult.totalPrice += buySoup(itemsToBuy);

		orderResult.totalPrice = (formatPrice(orderResult.totalPrice));

		return orderResult;
	};

	return {
		SuperMarket : SuperMarket,
		buyBread : buyBread,
		buyNoodles : buyNoodles,
		buySoup : buySoup,
		formatPrice : formatPrice
	};

});