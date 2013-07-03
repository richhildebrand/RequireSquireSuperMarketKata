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
				var costOfBread = _superMarket();

				expect(costOfBread).to.be.equal('$5');
			});

			it('should charge me $10 for ten loafs of bread', function() {
				var costOfBread = _superMarket();

				expect(costOfBread).to.be.equal('$10');
			});
		});

	});
});