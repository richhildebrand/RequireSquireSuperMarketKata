define([], function() {

	var createProductsList = function() {
		var productsList = [];
		productsList['loafsOfBread'] = 1;
		productsList['cansOfSoup'] = 2;
		productsList['noodles'] = .5;
		productsList['apples'] = 2;
		return productsList;
	};

	var ProductsList = {
		products: null,

		getProducts: function() { 
			if (this.products === null) {
				this.products = createProductsList();
			}
			return this.products;
		}
	}
	
	return ProductsList;
});