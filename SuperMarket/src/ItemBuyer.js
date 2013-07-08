define([],
function() {

	var formatPrice = function(price) {
		price = '$' + price;
		return _needsZero(price) ? price + '0' : price;
	};

	// Brendan would love this method name!
	var _needsZero = function(price) {
		return (price.indexOf(".") != -1)
	}

	var ItemBuyer = {

		buyBread: function(itemsToBuy, orderResult) {
			var quantity = itemsToBuy['loafsOfBread'];
			var costOfItem = (quantity) ? quantity : 0;
			orderResult.totalPrice += costOfItem 
			orderResult.receipt += (costOfItem) ? 'loafsOfBread: ' + formatPrice(costOfItem ) : "";
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
