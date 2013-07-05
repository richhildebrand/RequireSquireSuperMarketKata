define(['Squire'], function(Squire) {
	describe('Unit Test - Given formatPrice was called', function() {
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

		describe('When a price is given to formatPrice', function() {
			it('should prepend a $ to the front of the price', function() {
				var formattedPrice = _superMarket.formatPrice(4);
				var firstCharacter = formattedPrice.split('')[0];

				expect(firstCharacter).to.be.equal('$');
			})
		});

		describe('When a price is given which does not contain a decimal point, formatPrice', function() {
			it('should not append a zero to the end of the price', function() {
				var formattedPrice = _superMarket.formatPrice(100);

				expect(formattedPrice).to.be.equal('$100');
			});
		});

		describe('When a price contains a decimal point, formatPrice', function() {
			it('should append a zero to the end of the price', function() {
				var formattedPrice = _superMarket.formatPrice(3.5);

				expect(formattedPrice).to.be.equal('$3.50');
			});

		});

	});
});