define(['Squire'], function(Squire) {
	describe('Unit Test - Given formatPrice was called', function() {
	'use strict';

		var testContext = {};
		var _priceFormatter;
		var _order;

		beforeEach(function(done) {
			_order = [];

			testContext.injector = new Squire();

			testContext.injector.require(['PriceFormatter'], function(PriceFormatter) {
				testContext.PriceFormatter = PriceFormatter;
				_priceFormatter = testContext.PriceFormatter;
				done();
			});
		});

		describe('When a price is given to formatPrice', function() {
			it('should prepend a $ to the front of the price', function() {
				var formattedPrice = _priceFormatter.formatPrice(4);
				var firstCharacter = formattedPrice.split('')[0];

				expect(firstCharacter).to.be.equal('$');
			})
		});

		describe('When a price is given which does not contain a decimal point, formatPrice', function() {
			it('should not append a zero to the end of the price', function() {
				var formattedPrice = _priceFormatter.formatPrice(100);

				expect(formattedPrice).to.be.equal('$100');
			});
		});

		describe('When a price contains a decimal point, formatPrice', function() {
			it('should append a zero to the end of the price', function() {
				var formattedPrice = _priceFormatter.formatPrice(3.5);

				expect(formattedPrice).to.be.equal('$3.50');
			});

		});

	});
});