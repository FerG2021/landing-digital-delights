<template>
	<div class="container">
		<HeaderSection />

		<div class="shopping-cart" v-if="list.length > 0">
			<div class="title">
				Detalles del pedido
			</div>

			<div class="list-container">
				<template 
					v-for="item in list" 
					:key="item"
				>
					<ShoppingCartItem 
						:product="item"
					/>
				</template>
			</div>

			<div class="resume">
				<ShoppingCartResume />
			</div>
		</div>

		<div 
			class="shopping-cart-not-found"
			v-else
		>
			<NotFound 
				:description="$t('notFoundShoppingCart')"
				class="not-found"
			/>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

import HeaderSection from '../../components/HeaderSection.vue';
import ShoppingCartItem from './ShoppingCartItem.vue';
import ShoppingCartResume from './ShoppingCartResume.vue';
import NotFound from '../../components/NotFound.vue';
export default {
	components : { HeaderSection, ShoppingCartItem, ShoppingCartResume, NotFound },
	computed: {
		...mapGetters('ShoppingCartStore', ['list']),
	}
};
</script>

<style lang="scss" scoped>
.container {
	height: 100vh;
	.shopping-cart {
		height: 80%;
		padding: 20px;
		.title {
			text-align: center;
			font-size: 18px;
			font-weight: 600;
			height: 5%;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.list-container {
			height: 70%;
			overflow-y: auto;
		}
		.resume {
			height: 20%;
		}
	}
	.shopping-cart-not-found {
		height: 80%;
		padding: 20px;
		display: flex;
	}
}

</style>