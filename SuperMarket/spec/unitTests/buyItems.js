define(['Squire'], function(Squire) {
	describe('Unit Test - buyItems function', function() {
	'use strict';

		var testContext = {};
		var _itemBuyer;
		var _order;
		var _orderResult

		beforeEach(function(done) {
			_order = {};
			_orderResult = { totalPrice: 0, receipt: "" };

			testContext.injector = new Squire();

			testContext.injector.require(['ItemBuyer'], function(ItemBuyer) {
				testContext.ItemBuyer = ItemBuyer;
				_itemBuyer = testContext.ItemBuyer;
				done();
			});
		});


		describe('When bread costs 1 per loaf, noodles cost .5, and soup costs 2 per can, buyItems', function() {
			it('should charge me 5 for 2 loafs of bread, 2 noodles, and 1 can of soup', function() {
				_order['loafsOfBread'] = 2;
				_order['noodles'] = 2;
				_order['cansOfSoup'] = 1;
				
				var orderResult = _itemBuyer.buyItems(_order);
				var costOfOrder = orderResult.totalPrice;
				var receipt = orderResult.receipt;

				expect(costOfOrder).to.be.equal('$5');
				expect(receipt).to.be.contain('loafsOfBread: $2');
				expect(receipt).to.be.contain('noodles: $1');
				expect(receipt).to.be.contain('cansOfSoup: $2');
			});
		});

	});
});