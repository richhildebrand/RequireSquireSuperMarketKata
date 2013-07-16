define(['Squire', 'ProductList'], 
function(Squire,   ProductList) {
	describe('Unit Test - Buying Noodles', function() {
	'use strict';

		var testContext = {};
		var _itemBuyer;
		var _order;
		var _orderResult;

		beforeEach(function(done) {
			_order = {};
			_orderResult = { totalPrice: 0, receipt: "" };

			testContext.injector = new Squire();
			testContext.injector.mock("ProductList", ProductList);

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

		describe('When noodles cost 1.5 per batch, buyItem', function() {
			it('should charge me 4.5 for three noodles', function() {
				var itemToBuy = 'noodles';
				var quantityToBuy = 3;

				var fakeProductsList = [];
				fakeProductsList['noodles'] = 1.5
				
				// method two - stub function with sinon
				sinon.stub(ProductList, "getProducts").returns(fakeProductsList);

				var orderResult = _itemBuyer.buyItem(itemToBuy, quantityToBuy, _orderResult);
				var costOfNoodles = orderResult.totalPrice;
				var receipt = orderResult.receipt;

				expect(costOfNoodles).to.be.equal(4.5);
				expect(receipt).to.be.equal('noodles: $4.50');

				
			});

			
		});

		describe('When noodles cost 5 per batch, buyItem', function() {
			it('should charge me 50 for ten noodles', function() {
				var itemToBuy = 'noodles';
				var quantityToBuy = 10;

				var fakeProductsList = [];
				fakeProductsList['noodles'] = 5;

				// method two - stub function with sinon
				sinon.stub(ProductList, "getProducts").returns(fakeProductsList);

				var orderResult = _itemBuyer.buyItem(itemToBuy, quantityToBuy, _orderResult);
				var costOfNoodles = orderResult.totalPrice;

				var receipt = orderResult.receipt; 

				expect(costOfNoodles).to.be.equal(50);
				expect(receipt).to.be.equal('noodles: $50');
			});
		});
	});
});