define([],
function() {
	'use strict';

	var SuperMarket = function(itemsToBuy) {
		var price = '$';

		if (itemsToBuy['loafsOfBread'])
		{
			return price + itemsToBuy['loafsOfBread'] 
		}
		return price + itemsToBuy['noodles'] * .5;
	};

	return SuperMarket;

});