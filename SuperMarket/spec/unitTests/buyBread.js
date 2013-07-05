define(['Squire'], function(Squire) {
	describe('Unit Test - buyBread function', function() {
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

		describe('When bread costs 1 per loaf, buyBread', function() {
			it('should charge me 5 for five loafs of bread', function() {
				_order['loafsOfBread'] = 5;
				
				var costOfBread = _superMarket.buyBread(_order);

				expect(costOfBread).to.be.equal(5);
			});

			it('should charge me 10 for ten loafs of bread', function() {
				_order['loafsOfBread'] = 10;

				var costOfBread = _superMarket.buyBread(_order);

				expect(costOfBread).to.be.equal(10);
			});
		});

	});
});