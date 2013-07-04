define(['Squire'], function(Squire) {
	describe('Given I am buying bread', function() {
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

		describe('When noodles cost $0.50 per batch, the super market', function() {
			it('should charge me $1 for two noodles', function() {
				_order['noodles'] = 2;

				var costOfNoodles = _superMarket(_order);

				expect(costOfNoodles).to.be.equal("$1");
			})

			it('should change me $3.50 for seven noodles', function() {
				_order['noodles'] = 7;

				var costOfNoodles = _superMarket(_order);

				expect(costOfNoodles).to.be.equal("$3.50");
			});
		});
	});
});