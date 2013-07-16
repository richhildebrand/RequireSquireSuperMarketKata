define(['PriceFormatter', 'ProductList'],
function(PriceFormatter, ProductList) {
	'use strict';

	var _priceFormatter = PriceFormatter;

	var ItemBuyer = {
			
		//TODO: do not pass in orderResult
		buyItems: function(itemsToBuy, orderResult) {
			for(var index in itemsToBuy) {
				debugger;
			}
		},

		buyBread: function(itemsToBuy, orderResult) {
			return this.buyItem(itemsToBuy, orderResult, 'loafsOfBread');
		},

		buyNoodles: function(itemsToBuy, orderResult) {
			return this.buyItem(itemsToBuy, orderResult, 'noodles');
		},

		buySoup: function(itemsToBuy, orderResult) {
			return this.buyItem(itemsToBuy, orderResult, 'cansOfSoup');
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
