define([], function() {

	var createProductsList = function() {
		var productsList = [];
		productsList['loafsOfBread'] = { price: 1, unit: 'each', buyNgetOneFree: 0 };
		productsList['cansOfSoup'] = { price: 2, unit: 'each', buyNgetOneFree: 4 };
		productsList['noodles'] = { price: .5, unit: 'each', buyNgetOneFree: 0 };
		productsList['apples'] = { price: 2, unit: 'pound', buyNgetOneFree: 0 };
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