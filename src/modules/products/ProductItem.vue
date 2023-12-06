<template>
	<div class="cotainer">
		<div class="img-container">
			<img :src="product.image" :class="product.stock === 0 ? 'not-available-product' : ''">
		</div>
		<div class="information-container">
			<div class="name">
				{{ product.name }}
			</div>
			<div class="price">
				$ {{ formatNumber(product.price) }}
			</div>
		</div>
	</div>
</template>

<script>
import { formatNumberToDecimal } from '../../utils/utils';
export default {
	props: {
		product: {
			type: Object,
			required: true
		}
	},
	methods: {
		formatNumber(price) {
			return formatNumberToDecimal(price, 0, 0);
		}
	}
};
</script>

<style lang="scss" scoped>
	.cotainer {
		height: 180px;
		width: 120px;
		background-color: var(--background-product-color);
		border-radius: 20px;
		.img-container {
			height: 100px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			object-fit: contain;
			.not-available-product {
				filter: grayscale(80%);
			}
		}
		.information-container {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-around;
			height: 80px;
			.name {
				text-align: center;
			}
			.price {
				color: var(--main-variant);
				font-weight: bold;
				font-size: 18px;
			}
		}
	}
</style>