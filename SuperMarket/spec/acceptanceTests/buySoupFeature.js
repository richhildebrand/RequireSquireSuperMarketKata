define(['Squire'], function(Squire) {
	describe('Given I am buying soup', function() {
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

		describe('When soup cost $2 per batch, the super market', function() {
			it('should charge me $4 for one can of soup', function() {
				_order['soup'] = 2;

				var costOfSoup = _superMarket(_order);

				expect(costOfSoup).to.be.equal("$4");
			})
		});
	});
});