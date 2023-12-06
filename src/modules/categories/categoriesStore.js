export default {
	namespaced: true,

	state: {
		categories: null,
		filteredCategories: null,
		selectedCategory: null,
	},

	getters: {
		categories(state) {
			return state.categories;
		},
		filteredCategories(state) {
			return state.filteredCategories;
		},
		selectedCategory(state) {
			return state.selectedCategory;
		}
	},

	mutations: {
		setCategories(state, categories) {
			state.categories = categories;
		},
		setFilteredCategories(state, filteredCategories) {
			state.filteredCategories = filteredCategories;
		},
		setSelectedCategory(state, selectedCategory) {
			state.selectedCategory = selectedCategory;
		},
		clearStore(state) {
			state.categories = null;
		}
	},

	actions: { },
};