define(['PriceFormatter'],
function(PriceFormatter) {

	var ItemBuyer = {

		buyBread: function(itemsToBuy, orderResult) {
			var quantity = itemsToBuy['loafsOfBread'];
			var costOfItem = (quantity) ? quantity : 0;
			orderResult.totalPrice += costOfItem 
			orderResult.receipt += (costOfItem) ? 'loafsOfBread: ' + PriceFormatter.formatPrice(costOfItem) : "";
			return orderResult;
		},

		buyNoodles: function(itemsToBuy, orderResult) {
			var quantity = itemsToBuy['noodles'];
			var costOfItem = (quantity) ? quantity * .5 : 0;
			orderResult.totalPrice += costOfItem;
			orderResult.receipt += (costOfItem) ? 'noodles: ' + PriceFormatter.formatPrice(costOfItem) : "";
			return orderResult;
		},

		buySoup: function(itemsToBuy) {
			var quantity = itemsToBuy['cansOfSoup'];
			return (quantity) ? quantity * 2 : 0;
		}
	}

	return ItemBuyer;
});
