<template>
	<div class="container">
		<Button
			v-if="showDefautlAddButton()"
			icon="pi pi-cart-plus"
			label="Agregar" 
			class="button"
			@click="clickAddButton()"
		/>
		<IncrementDecrementButton 
			v-else
			class="input-number"
			:product="product"
		/>
	</div>
	
</template>

<script>
import { mapGetters } from 'vuex';
import Store from '../managers/store/store';
import IncrementDecrementButton from './IncrementDecrementButton.vue';

export default {
	components: { IncrementDecrementButton },
	props: {
		product: {
			type: Object,
			required: true
		}
	},
	data() {
		return {
		};
	},
	computed: {
		...mapGetters('ShoppingCartStore', ['list']),
		productsCant() {
			const findProduct = this.list.find(element => element.id === this.product.id);

			if (findProduct) {
				return findProduct.cant;
			} else {
				return 0;
			}
		}
	},
	methods: {
		clickAddButton() {
			Store.commit('ShoppingCartStore/addProduct', { product: this.product, cant: 1 });
		},
		showDefautlAddButton() {
			return !this.list.find(element => element.id === this.product.id && element.category_id === this.product.category_id);
		}
	},
};
</script>

<style lang="scss" scoped>
.container {
	width: 50%;
	.button {
		width: 100%;
		background-color: transparent;
		color: var(--main); 
		border: 1px solid var(--main);
		border-radius: 20px;
	}
	.input-number {
		width: 100%;
	}
}


</style>