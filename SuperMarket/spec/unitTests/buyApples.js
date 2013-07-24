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
				sinon.stub(ProductList, 'getProducts').returns(fakeProductList);

				var orderResult = _itemBuyer.buyItem(itemToBuy, quantityToBuy, _orderResult);
				var costOfApples = orderResult.totalPrice;
				var receipt = orderResult.receipt;

				expect(costOfApples).to.be.equal(8);
				expect(receipt).to.be.contain('apples $4/pound: $8');
			});
		});

		describe('When apples cost 1 per pound, buyItem', function() { 
			it('should charge me .33 for .33333 pounds of apples', function() {
				var itemToBuy = 'apples';
				var quantityToBuy = .33333;
				
				var fakeProductList = [];
				fakeProductList['apples'] = 1;
				sinon.stub(ProductList, 'getProducts').returns(fakeProductList);

				var orderResult = _itemBuyer.buyItem(itemToBuy, quantityToBuy, _orderResult);
				var costOfApples = orderResult.totalPrice;
				var receipt = orderResult.receipt;

				expect(costOfApples).to.be.equal(0.33);
				expect(receipt).to.contain("apples $1/pound: $0.33");
			});
		});

		// My thinking is that this feature should be available to all items
		// even though only soup is using it atm.

		// Also, I ment to write this for soup, but the above justification sounded good didn't it?
		describe('When apples cost 1 per pound' +
				 'and you get one free when you buy four pounds', function() { 
			it('should charge me $3 for 4 pounds of apples', function() {
				var itemToBuy = 'apples';
				var quantityToBuy = 4;
				
				var fakeProductList = [];
				fakeProductList['apples'] = 1;
				sinon.stub(ProductList, 'getProducts').returns(fakeProductList);

				var orderResult = _itemBuyer.buyItem(itemToBuy, quantityToBuy, _orderResult);
				var costOfApples = orderResult.totalPrice;
				var receipt = orderResult.receipt;

				expect(costOfApples).to.be.equal(3);
				expect(receipt).to.contain("apples $1/pound: $3");
			});
		});
	});
});