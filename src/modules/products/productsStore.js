export default {
	namespaced: true,

	state: {
		products: [],
		productsByCategory: [],
		productsFiltered: []
	},

	getters: {
		products(state) {
			return state.products;
		},
		productsByCategory(state) {
			return state.productsByCategory;
		},
		productsFiltered(state) {
			return state.productsFiltered;
		},
	},

	mutations: {
		setProducts(state, products) {
			state.products = products;
		},
		setProductsBySelectedCategory(state, category) {
			const filteredProducts = state.products.filter((element) =>
				element.category_id === category.id);
			state.productsByCategory = filteredProducts;
			state.productsFiltered = filteredProducts;
		},
		setProductsFiltered(state, productsFiltered) {
			state.productsFiltered = productsFiltered;
		},
	},

	actions: { },
};