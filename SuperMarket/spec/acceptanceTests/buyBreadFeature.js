define(['Squire'], function(Squire) {
	describe('Given I am buying bread', function() {
	'use strict';

		var testContext = {};
		var _superMarket;

		beforeEach(function(done) {

			testContext.injector = new Squire();

			testContext.injector.require(['SuperMarket'], function(SuperMarket) {
				testContext.SuperMarket = SuperMarket;
				_superMarket = testContext.SuperMarket;
				done();
			});
		});

		describe('When bread costs $1 per loaf, the super market', function() {
			it('should charge me $5 for five loafs of bread', function() {
				var costOfBread = _superMarket(5);

				expect(costOfBread).to.be.equal("$5");
			});

			it('should charge me $10 for ten loafs of bread', function() {
				var costOfBread = _superMarket(10);

				expect(costOfBread).to.be.equal("$10");
			});
		});

		//OH NO! How do we know the difference between bread and noodles?! REFACTOR :)
		describe('When noodles cost $0.50 per batch, the super market', function() {
			it('should charge me $1 for two noodles', function() {
				var costOfNoodles = _superMarket(2);

				expect(costOfNoodles).to.be.equal("$1");
			});
		});
	});
});