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

		afterEach(function() {
			try { _itemBuyer.buyItem.restore(); }
			catch(expection) { }
		});


		describe('When bread costs 2 per loaf, noodles cost 1, and soup costs 4 per can, buyItems', function() {
			it('should charge me 10 for 2 loafs of bread, 2 noodles, and 4 can of soup', function() {
				_order['loafsOfBread'] = 2;
				_order['noodles'] = 2;
				_order['cansOfSoup'] = 1;

				//Also, I think we need to write some more acceptance tests. Another good use I'm finding with acceptance tests
				//is that for a long project like this it would be useful to have tests in place for plently for
				//future functionality, even if the individual test structure completely changes when we get around to it
				//, it would still be nice to have the direction and idea we originally had.
				//Thoughts?

				//I agree! I got kinda lost in refactoring land.

				// Speaking of, this fix possible because of side effect coding. =)
				// If you want to try to refactor that out to imporove this test,
				// I'll try and deal with the new mocking requirements.
				_orderResult.totalPrice = 10;
				_orderResult.receipt="loafsOfBread: $4 noodles: $2 cansOfSoup: $4";
				sinon.stub(_itemBuyer, "buyItem").returns(_orderResult)

				var orderResult = _itemBuyer.buyItems(_order);
				var costOfOrder = orderResult.totalPrice;
				var receipt = orderResult.receipt;

				expect(costOfOrder).to.be.equal('$10');
				expect(receipt).to.be.contain('loafsOfBread: $4');
				expect(receipt).to.be.contain('noodles: $2');
				expect(receipt).to.be.contain('cansOfSoup: $4');
			});
		});

		describe('When apples cost 2 per pound, buyItems', function() {
			it('should charge me 4 for 2 pounds of apples', function() {
				_order['apples'] = 2;

				_orderResult.totalPrice = 4;
				_orderResult.receipt="apples $2/pound: $4";
				sinon.stub(_itemBuyer, "buyItem").returns(_orderResult)

				var orderResult = _itemBuyer.buyItems(_order);
				var costOfOrder = orderResult.totalPrice;
				var receipt = orderResult.receipt;

				expect(costOfOrder).to.be.equal('$4');
				expect(receipt).to.be.contain('apples $2/pound: $4');
			});
		});
	});
});