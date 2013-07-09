define(['PriceFormatter'],
function(PriceFormatter) {
	'use strict';

	var _priceFormatter = PriceFormatter;

	var ItemBuyer = {

		buyBread: function(itemsToBuy, orderResult) {
			var quantity = itemsToBuy['loafsOfBread'];
			var costOfItem = (quantity) ? quantity : 0;
			orderResult.totalPrice += costOfItem 
			orderResult.receipt += (costOfItem) ? 'loafsOfBread: ' + _priceFormatter.formatPrice(costOfItem ) : "";
			return orderResult;
		},

		buyNoodles: function(itemsToBuy) {
			var quantity = itemsToBuy['noodles'];
			return (quantity) ? quantity * .5 : 0;
		},

		buySoup: function(itemsToBuy) {
			var quantity = itemsToBuy['cansOfSoup'];
			return (quantity) ? quantity * 2 : 0;
		}
	}

	return ItemBuyer;
});
