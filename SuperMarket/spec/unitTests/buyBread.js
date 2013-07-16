define(['Squire'], function(Squire) {
	describe('Unit Test - buyBread function', function() {
	'use strict';

		var testContext = {};
		var _itemBuyer;
		var _order;
		var _orderResult

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

		describe('When bread costs 1 per loaf, buyBread', function() {
			it('should charge me 5 for five loafs of bread', function() {
				_order['loafsOfBread'] = 5;
				
				var orderResult = _itemBuyer.buyItem(_order, _orderResult, 'loafsOfBread');
				var costOfBread = orderResult.totalPrice;
				var receipt = orderResult.receipt;

				expect(costOfBread).to.be.equal(5);
				expect(receipt).to.be.equal('loafsOfBread: $5');
			});

			it('should charge me 10 for ten loafs of bread', function() {
				_order['loafsOfBread'] = 10;

				var orderResult = _itemBuyer.buyItem(_order, _orderResult, 'loafsOfBread');
				var costOfBread = orderResult.totalPrice;
				var receipt = orderResult.receipt;

				expect(costOfBread).to.be.equal(10);
				expect(receipt).to.be.equal('loafsOfBread: $10');
			});
		});

	});
});