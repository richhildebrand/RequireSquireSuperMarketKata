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

		//I'm going to leave this first test red for you to pass because I could not figure out what was going on! :)
		//I did make it so buyItem now takes in a weight parameter. Not sure if that is the way you want it to go but seemed ok to me!
		//Also for you refactor you may want to mock out buyapples :)
		//Chris took a look at how we were mocking and said "I'm going to have to look into this, it looks like one of the better ways to mock in javascript"
		//I almost shit a brick because he was in such approval! SO GOOD JOB TO YOU SIR! WELL DONE!
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

			it('should charge me .67 for .33333 pounds of apples', function() {
				_order['apples'];

				var orderResult = _superMarket(_order, _orderResult);
				var costOfapples = orderResult.totalPrice;
				var receipt = orderResult.receipt;

				expect(costOfapples).to.be.equal("$.67");

				expect(receipt).to.contain("apples $2/pound: $.67");
			});
		});

	});
});