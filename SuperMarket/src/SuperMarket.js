define(['ItemBuyer'],
function(ItemBuyer) {
	'use strict';

	var _itemBuyer = ItemBuyer;

	//if possible extract this and _needsZero to a priceFormatter.
	//if you can't get it we will do it tomorrow since everyone
	//(including me) is going to feel like being super productive!
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

		orderResult = _itemBuyer.buyBread(itemsToBuy, orderResult);
		orderResult.totalPrice += _itemBuyer.buyNoodles(itemsToBuy); 
		orderResult.totalPrice += _itemBuyer.buySoup(itemsToBuy);

		orderResult.totalPrice = (formatPrice(orderResult.totalPrice));

		return orderResult;
	};

	return {
		SuperMarket : SuperMarket,
		formatPrice : formatPrice
	};

});