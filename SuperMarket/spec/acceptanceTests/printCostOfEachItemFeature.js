define(['Squire'],
	function(Squire) {
			'use strict';
	describe('Feature - Given I am buying items', function() {


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

		describe('When I buy items, the super market', function() {
			it('should print out the cost of each item first', function() {
				_order['noodles'] = 2;
				_order['loafsOfBread'] = 3;

				var total = _superMarket(_order);

				expect(total.receipt).to.contain("loafsOfBread: $3");
				expect(total.receipt).to.contain("noodles: $1");
			});
		});
	});
});