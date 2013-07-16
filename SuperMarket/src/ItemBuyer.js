define(['PriceFormatter', 'ProductList'],
function(PriceFormatter, ProductList) {
	'use strict';

	var ItemBuyer = {
			
		buyItems: function(itemsToBuy) {
			var me = this;
			var orderResult = { totalPrice: 0, receipt: ""};

			Object.keys(itemsToBuy).forEach(function (key) {
			   orderResult = me.buyItem(itemsToBuy, orderResult, key);
			});

			orderResult.totalPrice = (PriceFormatter.formatPrice(orderResult.totalPrice));
			return orderResult;
		},

		buyItem: function(itemsToBuy, orderResult, itemToBuy) {
			var quantity = itemsToBuy[itemToBuy];
			var itemPrice = ProductList.getProducts()[itemToBuy];

			var costOfItem = (quantity) ? quantity * itemPrice : 0;
			orderResult.totalPrice += costOfItem 
			orderResult.receipt += (costOfItem) ? itemToBuy + ': ' + PriceFormatter.formatPrice(costOfItem) : "";
			return orderResult;
		}
	}

	return ItemBuyer;
});
