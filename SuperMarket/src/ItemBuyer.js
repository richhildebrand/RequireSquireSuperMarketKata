define(['PriceFormatter', 'ProductList'],
function(PriceFormatter, ProductList) {
	'use strict';

	var ItemBuyer = {
			
		buyItems: function(itemsToBuy) {
			var me = this;
			var orderResult = { totalPrice: 0, receipt: ""};

			Object.keys(itemsToBuy).forEach(function (itemName) {
			   var itemQuantity = itemsToBuy[itemName];
			   orderResult = me.buyItem(itemName, itemQuantity, orderResult);
			});

			orderResult.totalPrice = (PriceFormatter.formatPrice(orderResult.totalPrice));
			return orderResult;
		},

		buyItem: function(itemToBuy, quantityToBuy, orderResult) {
			var itemPrice = ProductList.getProducts()[itemToBuy];
			var totalItemCost = quantityToBuy * itemPrice; 
			orderResult.totalPrice += totalItemCost;
			orderResult.receipt += itemToBuy + ': ' + PriceFormatter.formatPrice(totalItemCost);
			return orderResult;
		}
	}

	return ItemBuyer;
});
