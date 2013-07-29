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

		// Possible refactor, remove side effect (do not pass in orderResult)
		buyItem: function(itemToBuy, quantityToBuy, orderResult) {
			var item = ProductList.getProducts()[itemToBuy];
			var itemPrice = item.price;
			var totalItemCost = Math.round(quantityToBuy * itemPrice * 100) / 100;
			orderResult.totalPrice += totalItemCost;

			if (itemToBuy === 'apples')
			{
				if (quantityToBuy < 4)
				{
					orderResult.receipt += itemToBuy + ' $' + itemPrice + '/pound: ' + PriceFormatter.formatPrice(totalItemCost);
				}
				else
				{
					orderResult.receipt += itemToBuy + ' $' + itemPrice + '/pound: ' + PriceFormatter.formatPrice(totalItemCost - 1);
					orderResult.totalPrice -= 1;
				}
				
			}
			
			orderResult.receipt += itemToBuy + ': ' + PriceFormatter.formatPrice(totalItemCost);
			return orderResult;
		}
	}

	return ItemBuyer;
});
