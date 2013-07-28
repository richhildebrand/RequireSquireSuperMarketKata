define(['Squire'], function(Squire) {
	describe('Feature - Given I am buying soup', function() {
	'use strict';

		var testContext = {};
		var _superMarket;
		var _order;

		beforeEach(function(done) {
			_order = {};

			testContext.injector = new Squire();

			testContext.injector.require(['SuperMarket'], function(SuperMarket) {
				testContext.SuperMarket = SuperMarket;
				_superMarket = testContext.SuperMarket;
				done();
			});
		});

		describe('When soup costs $2 per can, the super market', function() {
			it('should charge me $4 for two cans of soup', function() {
				_order['cansOfSoup'] = 2;

				var result = _superMarket(_order);
				var costOfSoup = result.totalPrice;
				var receipt = result.receipt;

				expect(costOfSoup).to.be.equal("$4");
				expect(receipt).to.be.contain("cansOfSoup: $4");
			})
		});

		describe('When soup costs $2 per can ' +
				 'and buying four soups gives you one for free, the super market', function() {
			it('should charge me $6 for 4 cans of soup', function() {
				_order['cansOfSoup'] = 4;

				var result = _superMarket(_order);
				var costOfSoup = result.totalPrice;
				var receipt = result.receipt;

				expect(costOfSoup).to.be.equal("$6");
				expect(receipt).to.be.contain("cansOfSoup: $6");
			})
		});
	});
});