define(['Squire'], function(Squire) {
	describe('Unit Test - Buying apples', function() {
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
			try 
			{ _itemBuyer.buyItem.restore(); }
			catch(expection) { }
		});

		describe('When apples cost 2 per pound, buyItems', function() {
			it('should charge me 4 for 2 pounds of apples', function() {
				var itemToBuy = 'apples';
				var quantityToBuy = 0;
				var weight = 2;
				
				_orderResult.totalPrice = 4;
				_orderResult.receipt="apples $2/pound: $4";
				//sinon.stub(_itemBuyer, "buyItem").returns(_orderResult)

				var orderResult = _itemBuyer.buyItem(itemToBuy, quantityToBuy, weight);
				var costOfOrder = orderResult.totalPrice;
				var receipt = orderResult.receipt;

				expect(costOfOrder).to.be.equal(4);
				expect(receipt).to.be.contain('apples $2/pound: $4');
			});
		});
	});
});