define([],
function() {
	'use strict';

	var buyBread = function(itemsToBuy) {
		return itemsToBuy['loafsOfBread'];
	};

	var buyNoodles = function(itemsToBuy) {
		return itemsToBuy['noodles'] * .5;
	};

	var buySoup = function(itemsToBuy) {
		return itemsToBuy['cansOfSoup'] * 2;
	};

	var SuperMarket = function(itemsToBuy) {
		var price = '$';
		var zeroToAppendForDecimals = '0';
		var total = 0;
		var completeSentence = '';

		if (itemsToBuy['loafsOfBread'])
		{
			total = buyBread(itemsToBuy);
		}
		if (itemsToBuy['noodles'])
		{
			total += buyNoodles(itemsToBuy); 
		}
		if (itemsToBuy['cansOfSoup'])
		{
			total += buySoup(itemsToBuy);
		}
		completeSentence = price + total;
		if (completeSentence.indexOf(".") != -1)
		{
			return completeSentence + zeroToAppendForDecimals;
		}
		return completeSentence;
	};

	return {
		SuperMarket : SuperMarket,
		buyBread : buyBread,
		buyNoodles : buyNoodles,
		buySoup : buySoup
	};

});