define(['Squire'], function(Squire) {
	describe('Feature - Given I am buying apples', function() {
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

		describe('When apples costs $2 per pound, the super market', function() {
			it('should charge me $10 for five pounds of apples', function() {
				_order['apples'] = 5;

				var orderResult = _superMarket(_order, _orderResult);
				var costOfApples = orderResult.totalPrice;
				var receipt = orderResult.receipt;

				expect(costOfApples).to.be.equal("$10");
				//feel free to adjust this message to something you like better;
				expect(receipt).to.contain("apples $2/pound: $10");
			});

			it('should charge me .50 for .25 pounds of apples', function() {
				_order['Apples'] = .25;

				var orderResult = _superMarket(_order, _orderResult);
				var costOfApples = orderResult.totalPrice;
				var receipt = orderResult.receipt;

				expect(costOfApples).to.be.equal("$.50");
				//feel free to adjust this message to something you like better;
				expect(receipt).to.contain("apples $2/pound: $.50");
			});

			it('should charge me .67 for .33333 pounds of apples', function() {
				_order['Apples'];

				var orderResult = _superMarket(_order, _orderResult);
				var costOfApples = orderResult.totalPrice;
				var receipt = orderResult.receipt;

				expect(costOfApples).to.be.equal("$.67");
				//feel free to adjust this message to something you like better;
				expect(receipt).to.contain("apples $2/pound: $.67");
			});
		});

	});
});