define(['Squire'], function(Squire) {
	describe('Feature - Given I am buying bread', function() {
	'use strict';

		var testContext = {};
		var _superMarket;
		var _order;
		var _orderResult;

		beforeEach(function(done) {
			_order = {};
			_orderResult = { totalPrice: 0, receipt: "" };

			testContext.injector = new Squire();

			testContext.injector.require(['SuperMarket'], function(SuperMarket) {
				testContext.SuperMarket = SuperMarket;
				_superMarket = testContext.SuperMarket;
				done();
			});
		});

		describe('When bread costs $1 per loaf, the super market', function() {
			it('should charge me $5 for five loafs of bread', function() {
				_order['loafsOfBread'] = 5;

				var orderResult = _superMarket(_order, _orderResult)
				var costOfBread = orderResult.totalPrice;
				var receipt = orderResult.receipt;

				expect(costOfBread).to.be.equal("$5");
				expect(receipt).to.contain("loafsOfBread: $5");
			});

			it('should charge me $10 for ten loafs of bread', function() {
				_order['loafsOfBread'] = 10;

				var orderResult = _superMarket(_order, _orderResult)
				var costOfBread = orderResult.totalPrice;
				var receipt = orderResult.receipt;

				expect(costOfBread).to.be.equal("$10");
				expect(receipt).to.contain("loafsOfBread: $10");
			});
		});

	});
});