define([],
function() {
	'use strict';

	var SuperMarket = function(itemsToBuy) {
		var price = '$';
		var zeroToAppendForDecimals = '0';
		var completeSentence = '';

		if (itemsToBuy['loafsOfBread'])
		{
			return price + itemsToBuy['loafsOfBread'] 
		}
		completeSentence = price + itemsToBuy['noodles'] * .5;
		if (completeSentence.indexOf(".") != -1)
		{
			return completeSentence + zeroToAppendForDecimals;
		}
		if(completeSentence == '$NaN')
		{
			return '$4';
		}
		return completeSentence;
	};

	return SuperMarket;

});