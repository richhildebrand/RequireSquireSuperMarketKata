define(['ItemBuyer'],
function(ItemBuyer) {
	'use strict';

	var SuperMarket = function(itemsToBuy) {
		var orderResult = ItemBuyer.buyItems(itemsToBuy, orderResult);
		return orderResult;
	};

	return SuperMarket;
});