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

				var costOfSoup = _superMarket(_order).totalPrice;

				expect(costOfSoup).to.be.equal("$4");
			})
		});
	});
});