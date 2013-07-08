define(['Squire'], function(Squire) {
	describe('Unit Test - buySoup function', function() {
	'use strict';

		var testContext = {};
		var _itemBuyer;
		var _order;

		beforeEach(function(done) {
			_order = [];

			testContext.injector = new Squire();

			testContext.injector.require(['ItemBuyer'], function(ItemBuyer) {
				testContext.ItemBuyer = ItemBuyer;
				_itemBuyer = testContext.ItemBuyer;
				done();
			});
		});

		describe('When soup costs 2 per can, buy soup', function() {
			it('should charge me 4 for two cans of soup', function() {
				_order['cansOfSoup'] = 2;

				var costOfSoup = _itemBuyer.buySoup(_order);

				expect(costOfSoup).to.be.equal(4);
			})
		});
	});
});