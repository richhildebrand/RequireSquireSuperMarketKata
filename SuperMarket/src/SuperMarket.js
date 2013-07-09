define(['ItemBuyer', 'PriceFormatter'],
function(ItemBuyer, PriceFormatter) {
	'use strict';

	var SuperMarket = function(itemsToBuy) {
		var orderResult = { totalPrice: 0, receipt: ""};

		orderResult = ItemBuyer.buyBread(itemsToBuy, orderResult);
		orderResult = ItemBuyer.buyNoodles(itemsToBuy, orderResult); 
		orderResult.totalPrice += ItemBuyer.buySoup(itemsToBuy);

		orderResult.totalPrice = (PriceFormatter.formatPrice(orderResult.totalPrice));

		return orderResult;
	};
	return SuperMarket;
});