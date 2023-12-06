import axios from 'axios';
import Store from '../store/store';

export const getAllCategories = async (account) => {
	await axios.get(`/api/categories/catalogue/${account}`)
		.then((response) => {
			Store.commit('CategoriesStore/setCategories', response.data.data);
			Store.commit('CategoriesStore/setFilteredCategories', response.data.data);
		})
		.catch((error) => {
			console.log(error);
		});
};

export const getAllProducts = async (account) => {
	await axios.get(`/api/products/catalogue/${account}`)
		.then((response) => {
			Store.commit('ProductsStore/setProducts', response.data.data);
		})
		.catch((error) => {
			console.log(error);
		});
};

export const getAllPromotions = async (account) => {
	await axios.get(`/api/promotions/catalogue/${account}`)
		.then((response) => {
			Store.commit('PromotionsStore/setPromotions', response.data.data);
		})
		.catch((error) => {
			console.log(error);
		});
};