define(['ItemBuyer', 'PriceFormatter'],
function(ItemBuyer, PriceFormatter) {
	'use strict';

	var _itemBuyer = ItemBuyer;
	var _priceFormatter = PriceFormatter;


	var SuperMarket = function(itemsToBuy) {
		var orderResult =ItemBuyer.buyItems(itemsToBuy, orderResult);

		orderResult.totalPrice = (_priceFormatter.formatPrice(orderResult.totalPrice));

		return orderResult;
	};

	return SuperMarket;
});