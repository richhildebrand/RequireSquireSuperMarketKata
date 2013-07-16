define(['Squire'], function(Squire) {
	describe('Unit Test - Buying Bread', function() {
	'use strict';

		var testContext = {};
		var _itemBuyer;
		var _order;
		var _orderResult

		beforeEach(function(done) {
			_order = {};
			_orderResult = { totalPrice: 0, receipt: "" };

			var fakeProductList = { 
				getProducts: function() { 
					var productsList = [];
					productsList['loafsOfBread'] = 3;
					return productsList;
				}
			};
			
			testContext.injector = new Squire();

			// method one - inject a fake via require/squire
			testContext.injector.mock("ProductList", fakeProductList);

			testContext.injector.require(['ItemBuyer'], function(ItemBuyer) {
				testContext.ItemBuyer = ItemBuyer;
				_itemBuyer = testContext.ItemBuyer;
				done();
			});
		});

		describe('When bread costs 3 per loaf, buyItem', function() {
			it('should charge me 15 for five loafs of bread', function() {
				var itemToBuy = 'loafsOfBread';
				var quantityToBuy = 5;

				var orderResult = _itemBuyer.buyItem(itemToBuy, quantityToBuy, _orderResult);
				var costOfBread = orderResult.totalPrice;
				var receipt = orderResult.receipt;

				expect(costOfBread).to.be.equal(15);
				expect(receipt).to.be.equal('loafsOfBread: $15');
			});

			it('should charge me 30 for ten loafs of bread', function() {
				var itemToBuy = 'loafsOfBread';
				var quantityToBuy = 10;

				var orderResult = _itemBuyer.buyItem(itemToBuy, quantityToBuy, _orderResult);
				var costOfBread = orderResult.totalPrice;
				var receipt = orderResult.receipt;

				expect(costOfBread).to.be.equal(30);
				expect(receipt).to.be.equal('loafsOfBread: $30');
			});
		});

	});
});