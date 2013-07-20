define(['Squire', 'ProductList'], function(Squire, ProductList) {
	describe('Unit Test - Buying apples', function() {
	'use strict';

		var testContext = {};
		var _itemBuyer;
		var _orderResult;

		beforeEach(function(done) {
			_orderResult = { totalPrice: 0, receipt: "" }

			testContext.injector = new Squire();
			testContext.injector.mock('ProductList', ProductList);

			testContext.injector.require(['ItemBuyer'], function(ItemBuyer) {
				testContext.ItemBuyer = ItemBuyer;
				_itemBuyer = testContext.ItemBuyer;
				done();
			});
		});

		afterEach(function () {
			try { ProductList.getProducts.restore(); } 
		    catch(exception) {}
		});

		describe('When apples cost 4 per pound, buyItem', function() {
			it('should charge me 8 for 2 pounds of apples', function() {
				var itemToBuy = 'apples';
				var quantityToBuy = 2;
				
				var fakeProductList = [];
				fakeProductList['apples'] = 4;
				sinon.stub(ProductList, 'getProducts').returns(fakeProductList)

				var orderResult = _itemBuyer.buyItem(itemToBuy, quantityToBuy, _orderResult);
				var costOfOrder = orderResult.totalPrice;
				var receipt = orderResult.receipt;

				expect(costOfOrder).to.be.equal(8);
				expect(receipt).to.be.contain('apples $4/pound: $8');
			});
		});
	});
});