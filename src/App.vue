<template>
	<div v-if="loaded">
		<div class="container">
			<router-view></router-view>
		</div>
	</div>
	<div v-else class="spinner-container">
		<ProgressSpinner />
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import Store from './managers/store/store';
import { getAllCategories, getAllProducts, getAllPromotions } from './managers/api/api';

import ProgressSpinner from './components/ProgressSpinner.vue';


export default {
	components: { ProgressSpinner },
	computed: {
		...mapGetters('UsersStore', ['account', 'loaded'])
	},
	mounted() {
		this.getAllCategories();
		this.getAllProducts();
		this.getAllPromotions();
		this.$router.push('/');
	},
	methods: {
		async getAllCategories() {
			await getAllCategories(this.account);
		},

		async getAllProducts() {
			await getAllProducts(this.account);
		},

		async getAllPromotions() {
			await getAllPromotions(this.account);
			Store.commit('UsersStore/setLoaded', true);
		}
	},
};
</script>

<style lang="scss">
.spinner-container {
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
</style>