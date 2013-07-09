define(['ItemBuyer', 'PriceFormatter'],
function(ItemBuyer, PriceFormatter) {
	'use strict';

	var _itemBuyer = ItemBuyer;
	var _priceFormatter = PriceFormatter;

	var SuperMarket = function(itemsToBuy) {
		var orderResult = { totalPrice: 0, receipt: ""};

		orderResult = _itemBuyer.buyBread(itemsToBuy, orderResult);
		orderResult.totalPrice += _itemBuyer.buyNoodles(itemsToBuy); 
		orderResult.totalPrice += _itemBuyer.buySoup(itemsToBuy);

		orderResult.totalPrice = (_priceFormatter.formatPrice(orderResult.totalPrice));

		return orderResult;
	};

	return {
		SuperMarket : SuperMarket
	};

});