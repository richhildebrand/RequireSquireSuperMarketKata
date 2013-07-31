define(['Squire', 'ProductList'], function(Squire, ProductList) {
	describe('Unit Test - Buying soup', function() {
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

		describe('When soup costs 1.75 per can, buy item', function() {
			it('should charge me 3.50 for two cans of soup', function() {
				var itemToBuy = 'cansOfSoup';
				var quantityToBuy = 2;

				var fakeProductsList = [];
				fakeProductsList['cansOfSoup'] = { price: 1.75 };

				sinon.stub(ProductList, "getProducts").returns(fakeProductsList);

				var orderResult = _itemBuyer.buyItem(itemToBuy, quantityToBuy, _orderResult);
				var costOfSoup = orderResult.totalPrice;
				var receipt = orderResult.receipt

				expect(costOfSoup).to.be.equal(3.50);
				expect(receipt).to.be.equal('cansOfSoup: $3.50');
			});
		});

		describe('When soup costs 3 per can, buy item', function() {
			it('should charge me 9 for four cans of soup', function() {
				var itemToBuy = 'cansOfSoup';
				var quantityToBuy = 4;

				var fakeProductsList = [];
				fakeProductsList['cansOfSoup'] = { price: 3, buyNgetOneFree: 4 };

				sinon.stub(ProductList, "getProducts").returns(fakeProductsList);

				var orderResult = _itemBuyer.buyItem(itemToBuy, quantityToBuy, _orderResult);
				var costOfSoup = orderResult.totalPrice;
				var receipt = orderResult.receipt

				expect(costOfSoup).to.be.equal(9);
				expect(receipt).to.be.equal('cansOfSoup: $9');
			});

			it('should charge me $21 for nine cans of soup', function() {
				var itemToBuy = 'cansOfSoup';
				var quantityToBuy = 9;

				var fakeProductsList = [];
				fakeProductsList['cansOfSoup'] = { price: 3, buyNgetOneFree: 4 };

				sinon.stub(ProductList, "getProducts").returns(fakeProductsList);

				var orderResult = _itemBuyer.buyItem(itemToBuy, quantityToBuy, _orderResult);
				var costOfSoup = orderResult.totalPrice;
				var receipt = orderResult.receipt

				expect(costOfSoup).to.be.equal(21);
				expect(receipt).to.be.equal('cansOfSoup: $21');
			});
		});
	});
});