define(['Squire'], function(Squire) {
	describe('Unit Test - Buying soup', function() {
	'use strict';

		var testContext = {};
		var _itemBuyer;
		var _order;
		var _orderResult;

		beforeEach(function(done) {
			_order = {};
			_orderResult = { totalPrice: 0, receipt: "" };
			testContext.injector = new Squire();

			testContext.injector.require(['ItemBuyer'], function(ItemBuyer) {
				testContext.ItemBuyer = ItemBuyer;
				_itemBuyer = testContext.ItemBuyer;
				done();
			});
		});

		describe('When soup costs 1.75 per can, buy item', function() {
			it('should charge me 3.50 for two cans of soup', function() {
				var itemToBuy = 'cansOfSoup';
				var quantityToBuy = 2;

				// to fix this pick your favorite mocking method I used
				// in buyBread or buyNoodles. Don't change the price in ProductList =D

				var orderResult = _itemBuyer.buyItem(itemToBuy, quantityToBuy, 'cansOfSoup');
				var costOfSoup = orderResult.totalPrice;
				var receipt = orderResult.receipt

				expect(costOfSoup).to.be.equal(3.5);
				expect(receipt).to.be.equal('cansOfSoup: $3.50');
			});
		});

	});
});