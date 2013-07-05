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

	var formatPrice = function(price) {
		var formattedPrice = '$' + price;
		return ((formattedPrice.indexOf(".") != -1)) ? formattedPrice + '0' : formattedPrice;
	};

	var SuperMarket = function(itemsToBuy) {
		var zeroToAppendForDecimals = '0';
		var totalPrice = 0;

		if (itemsToBuy['loafsOfBread'])
		{
			totalPrice = buyBread(itemsToBuy);
		}
		if (itemsToBuy['noodles'])
		{
			totalPrice += buyNoodles(itemsToBuy); 
		}
		if (itemsToBuy['cansOfSoup'])
		{
			totalPrice += buySoup(itemsToBuy);
		}
		return formatPrice(totalPrice);
	};

	return {
		SuperMarket : SuperMarket,
		buyBread : buyBread,
		buyNoodles : buyNoodles,
		buySoup : buySoup,
		formatPrice : formatPrice
	};

});