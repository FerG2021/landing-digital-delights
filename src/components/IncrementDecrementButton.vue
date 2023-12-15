<template>
  <div class="container">
	<Button 
		class="button" 
		severity="danger"
		icon="pi pi-minus" 
		aria-label="Filter"
		outlined
		@click="clickDecrementButton()"
	/>
	<input 
		type="number" 
		class="input-html-number"
		v-model="productsCant"
		disabled
	>
	<Button 
		class="button" 
		severity="success" 
		icon="pi pi-plus" 
		aria-label="Filter"
		@click="clickIncrementButton()"
		outlined
	/>
	<Button 
		class="button delete" 
		severity="danger"
		icon="pi pi-trash" 
		aria-label="Filter"
		@click="clickDeleteButton()"
		outlined
	/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Store from '../managers/store/store';

export default {
	props: {
		product: {
			type: Object,
			required: true
		}
	},
	data() {
		return {
			productsCant: 0
		};
	},
	mounted() {
		this.setInput();
	},
	computed: {
		...mapGetters('ShoppingCartStore', ['list']),
	},
	methods: {
		setInput() {
			const findProduct = this.list.find(element => element.id === this.product.id && element.category_id === this.product.category_id);

			this.productsCant = findProduct.cant;
		},
		clickIncrementButton() {
			this.productsCant = this.productsCant + 1;

			Store.commit('ShoppingCartStore/addProduct', { product: this.product, cant: this.productsCant });
		},
		clickDecrementButton() {
			this.productsCant = this.productsCant - 1;

			Store.commit('ShoppingCartStore/addProduct', { product: this.product, cant: this.productsCant });
		},
		clickDeleteButton() {
			this.productsCant = 0;
			Store.commit('ShoppingCartStore/addProduct', { product: this.product, cant: this.productsCant });
		}
	}
};
</script>

<style lang="scss" scoped>
.container {
	width: 100%;
	display: flex;
	justify-content: center;
	.button {
		width: 20%;
	}
	.delete {
		margin-left: 5px;
	}
	.input-html-number {
		width: 20%;
		height: 36px;
		text-align: center;
		font-size: 18px;
		border-radius: 0px;
		border: 1px solid #2f2f2f;
	}
}
</style>