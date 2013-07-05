define(['Squire'], function(Squire) {
	describe('Unit Test - buyNoodles function', function() {
	'use strict';

		var testContext = {};
		var _superMarket;
		var _order;

		beforeEach(function(done) {
			_order = [];

			testContext.injector = new Squire();

			testContext.injector.require(['SuperMarket'], function(SuperMarket) {
				testContext.SuperMarket = SuperMarket;
				_superMarket = testContext.SuperMarket;
				done();
			});
		});

		describe('When noodles cost 0.5 per batch, the super market', function() {
			it('should charge me 1 for two noodles', function() {
				_order['noodles'] = 2;

				var costOfNoodles = _superMarket.buyNoodles(_order);

				expect(costOfNoodles).to.be.equal(1);
			})

			it('should charge me 3.50 for seven noodles', function() {
				_order['noodles'] = 7;

				var costOfNoodles = _superMarket.buyNoodles(_order);

				expect(costOfNoodles).to.be.equal(3.5);
			});
		});
	});
});