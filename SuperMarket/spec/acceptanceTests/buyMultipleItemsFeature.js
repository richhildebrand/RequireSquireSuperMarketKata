define(['Squire'],
function(Squire) {
	'use strict';

	describe('Given I am buying multiple items', function() {
		var _order;
		var _superMarket;
		var testContext = {};

		beforeEach(function(done) {
			_order = [];

			testContext.injector = new Squire();

			testContext.injector.require(['SuperMarket'], function(SuperMarket) {
				testContext.SuperMarket = SuperMarket;
				_superMarket = testContext.SuperMarket;
				done();
			});
		});

		describe('When noodles cost 50 cents and bread costs $1 per loaf, the super market', function() {
			it('should charge me $6.50 for 5 noodles and 4 loafs of bread', function() {
				_order['noodles'] = 5;
				_order['loafsOfBread'] = 4;

				var cost = _superMarket(_order);

				expect(cost).to.be.equal('$6.50');
			});
		});
	});
});