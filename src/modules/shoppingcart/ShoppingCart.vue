<template>
	<div class="container">
		<HeaderSection />

		<div class="shopping-cart-container" v-if="list.length > 0">
			<div class="shopping-cart">
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
/*  */
/* MOBILE */
/*  */
@media all and (max-width: 960px) {
	.container {
		height: 100vh;
		.shopping-cart-container {
			height: 80%;
			padding: 20px;
			.shopping-cart {
				height: 100%;
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
		}
		.shopping-cart-not-found {
			height: 80%;
			padding: 20px;
			display: flex;
		}
	}
}

/*  */
/* WEB */
/*  */
@media all and (min-width: 961px) {
	.container {
		height: 100vh;
		.shopping-cart-container {
			width: 100%;
			height: 78%;
			padding: 20px;
			display: flex;
			flex-direction: column;
			align-items: center;
			.shopping-cart {
				height: 100%;
				width: 50%;
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
		}
		.shopping-cart-not-found {
			height: 80%;
			padding: 20px;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
}


</style>