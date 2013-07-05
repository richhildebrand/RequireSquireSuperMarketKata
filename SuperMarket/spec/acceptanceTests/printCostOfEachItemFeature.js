define(['Squire'],
	function(Squire) {
			'use strict';
	describe('Feature - Given I am buying items', function() {


		var testContext = {};
		var _superMarket;
		var _order;

		beforeEach(function(done) {
			_order = [];

			testContext.injector = new Squire();

			testContext.injector.require(['SuperMarket'], function(SuperMarket) {
				testContext.SuperMarket = SuperMarket;
				_superMarket = testContext.SuperMarket;
				done();
			});
		});

		//I will leave the unit test to be made by you since I'm almost positive that
		//you will make a separate function. I would have done this but I should probably
		//get back to work :).
		//Also, check the names of my unit tests. Idk how much I like them, they seem too simple. 
/*		describe('When I buy items, the super market', function() {
			it('should print out the cost of each item first', function() {
				_order['noodles'] = 2;
				_order['loafsOfBread'] = 3;

				var total = _superMarket.SuperMarket(_order);

				expect(total.receipt).to.be.equal("noodles: $1, loafsOfBread: $3");
			});
		});*/
	});
});