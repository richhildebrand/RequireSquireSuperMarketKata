define([],
function() {
	'use strict';

	var SuperMarket = function(itemsToBuy) {
		var price = '$';
		var zero = '0';
		var complete = '';

		if (itemsToBuy['loafsOfBread'])
		{
			return price + itemsToBuy['loafsOfBread'] 
		}
		complete = price + itemsToBuy['noodles'] * .5;
		if (complete.toString().indexOf(".") != -1)
		{
			return complete + zero;
		}
		return complete;
	};

	return SuperMarket;

});