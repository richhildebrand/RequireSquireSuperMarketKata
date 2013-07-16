define(['PriceFormatter', 'ProductList'],
function(PriceFormatter, ProductList) {
	'use strict';

	var _priceFormatter = PriceFormatter;

	var ItemBuyer = {
			
		//TODO: do not pass in orderResult
		buyItems: function(itemsToBuy) {
			var orderResult = { totalPrice: 0, receipt: ""};
			orderResult = this.buyBread(itemsToBuy, orderResult);
			orderResult = this.buyNoodles(itemsToBuy, orderResult);
			orderResult = this.buySoup(itemsToBuy, orderResult);

			orderResult.totalPrice = (_priceFormatter.formatPrice(orderResult.totalPrice));
			return orderResult;
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
