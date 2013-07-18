define(['Squire', 'ProductList'], function(Squire, ProductList) {
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
			testContext.injector.mock(ProductList, 'ProductList');

			testContext.injector.require(['ItemBuyer'], function(ItemBuyer) {
				testContext.ItemBuyer = ItemBuyer;
				_itemBuyer = testContext.ItemBuyer;
				done();
			});
		});


		describe('When bread costs 2 per loaf, noodles cost 1, and soup costs 4 per can, buyItems', function() {
			it('should charge me 10 for 2 loafs of bread, 2 noodles, and 4 can of soup', function() {
				_order['loafsOfBread'] = 2;
				_order['noodles'] = 2;
				_order['cansOfSoup'] = 1;

				//I did this simple red so you have a chance to do another mock in the agreed upon way.
				//Just make the mock use the correct values basically. Don't forget the after each! :)

				//Also, I think we need to write some more acceptance tests. Another good use I'm finding with acceptance tests
				//is that for a long project like this it would be useful to have tests in place for plently for
				//future functionality, even if the individual test structure completely changes when we get around to it
				//, it would still be nice to have the direction and idea we originally had.
				//Thoughts?
				
				var orderResult = _itemBuyer.buyItems(_order);
				var costOfOrder = orderResult.totalPrice;
				var receipt = orderResult.receipt;

				expect(costOfOrder).to.be.equal('$10');
				expect(receipt).to.be.contain('loafsOfBread: $4');
				expect(receipt).to.be.contain('noodles: $2');
				expect(receipt).to.be.contain('cansOfSoup: $4');
			});
		});

	});
});