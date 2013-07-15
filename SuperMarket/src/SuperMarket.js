define(['ItemBuyer', 'PriceFormatter'],
function(ItemBuyer, PriceFormatter) {
	'use strict';

	var _itemBuyer = ItemBuyer;
	var _priceFormatter = PriceFormatter;


	var SuperMarket = function(itemsToBuy) {
		var orderResult = { totalPrice: 0, receipt: ""};

		orderResult = ItemBuyer.buyBread(itemsToBuy, orderResult);
		orderResult = ItemBuyer.buyNoodles(itemsToBuy, orderResult); 
		orderResult = ItemBuyer.buySoup(itemsToBuy, orderResult);

		orderResult.totalPrice = (_priceFormatter.formatPrice(orderResult.totalPrice));

		return orderResult;
	};

	return {
		SuperMarket : SuperMarket
	};
});