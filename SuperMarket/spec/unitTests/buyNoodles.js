define(['Squire'], function(Squire) {
	describe('Unit Test - Buying Noodles', function() {
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

		describe('When noodles cost 0.5 per batch, buyItem', function() {
			it('should charge me 1 for two noodles', function() {
				_order['noodles'] = 2;

				var orderResult = _itemBuyer.buyItem(_order, _orderResult, 'noodles');
				var costOfNoodles = orderResult.totalPrice;
				var receipt = orderResult.receipt;

				expect(costOfNoodles).to.be.equal(1);
				expect(receipt).to.be.equal('noodles: $1');
			});

			it('should charge me 3.50 for seven noodles', function() {
				_order['noodles'] = 7;

				var orderResult = _itemBuyer.buyItem(_order, _orderResult, 'noodles');
				var costOfNoodles = orderResult.totalPrice;

				var receipt = orderResult.receipt; 

				expect(costOfNoodles).to.be.equal(3.5);
				expect(receipt).to.be.equal('noodles: $3.50');
			});
		});
	});
});