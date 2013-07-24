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
				var costOfapples = orderResult.totalPrice;
				var receipt = orderResult.receipt;

				expect(costOfapples).to.be.equal("$10");

				expect(receipt).to.contain("apples $2/pound: $10");
			});

			it('should charge me .50 for .25 pounds of apples', function() {
				_order['apples'] = .25;
				
				var orderResult = _superMarket(_order, _orderResult);
				var costOfapples = orderResult.totalPrice;
				var receipt = orderResult.receipt;

				expect(costOfapples).to.be.equal("$0.50");

				expect(receipt).to.contain("apples $2/pound: $0.50");
			});

			//Idk why this throws the extra zero on the end and the unit test doesn't...
			//I'm assuming it has to do with the '_needsZero' function

			//ha! Good call. I was scratching my head till I saw your hint!
			it('should charge me .67 for .33333 pounds of apples', function() {
				_order['apples'] = .33333;

				var orderResult = _superMarket(_order, _orderResult);
				var costOfapples = orderResult.totalPrice;
				var receipt = orderResult.receipt;

				expect(costOfapples).to.be.equal("$0.67");

				expect(receipt).to.contain("apples $2/pound: $0.67");
			});
		});

	});
});