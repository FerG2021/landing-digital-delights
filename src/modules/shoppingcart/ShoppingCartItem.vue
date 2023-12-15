<template>
	<div class="shopping-cart-item-container">
		<div class="img">
			<Image 
				:src="product.image" 
				alt="Image" 
				width="100" 
				preview 
			/>
		</div>
		<div class="information">
			<div class="name">
				{{ product.name ? product.name : product.title }}
			</div>
			<div class="price">
				$ {{ formatNumber(product.price) }}
			</div>
			<div class="buttons">
				<IncrementDecrementButton
					:product="product"
					class="increment-decrement-button"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import IncrementDecrementButton from '../../components/IncrementDecrementButton.vue';
import { formatNumberToDecimal } from '../../utils/utils';

export default {
	components: { IncrementDecrementButton },
	props: {
		product: {
			type: Object,
			required: true
		}
	},
	methods: {
		formatNumber(price) {
			return formatNumberToDecimal(price);
		}
	},
};
</script>

<style lang="scss" scoped>
/*  */
/* MOBILE */
/*  */
@media all and (max-width: 960px) {
	.shopping-cart-item-container {
		height: 100px;
		margin: 10px 0 10px 0;
		display: flex;
		background-color: var(--background-product-color);
		border-radius: 8px;
		.img {
			height: 100px;
		}
		.information {
			height: 100px;
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			text-align: center;
			.name {
				font-weight: bold;
			}
			.price {
				color: var(--main);
				font-weight: 600;
			}
		}
	}
}

/*  */
/* WEB */
/*  */
@media all and (min-width: 961px) {
	.shopping-cart-item-container {
		height: 100px;
		margin: 10px 0 10px 0;
		display: flex;
		background-color: var(--background-product-color);
		border-radius: 8px;
		.img {
			height: 100px;
			width: 40%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
		.information {
			height: 100px;
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;
			text-align: center;
			.name {
				font-weight: bold;
			}
			.price {
				color: var(--main);
				font-weight: 600;
			}
			.buttons {
				display: flex;
				flex-direction: column;
				align-items: center;
				width: 100%;
				.increment-decrement-button {
					width: 60%;
				}
			}
		}
	}
}

</style>