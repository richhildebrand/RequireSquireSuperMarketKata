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

		describe('When soup costs 2 per can, buy item', function() {
			it('should charge me 4 for two cans of soup', function() {
				_order['cansOfSoup'] = 2;

				var orderResult = _itemBuyer.buyItem(_order, _orderResult, 'cansOfSoup');
				var costOfSoup = orderResult.totalPrice;
				var receipt = orderResult.receipt

				expect(costOfSoup).to.be.equal(4);
				expect(receipt).to.be.equal('cansOfSoup: $4');
			});
		});

	});
});