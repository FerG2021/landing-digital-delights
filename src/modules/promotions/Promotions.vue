<template>
	<div class="container">
		<div class="information">
			<div class="title">
				{{ promotion.title }}
			</div>
			<div class="description">
				{{ promotion.description }}
			</div>
			<div class="price">
				$ {{ priceFormated(promotion.price) }}
			</div>
		</div>
		<div class="image">
			<img :src="promotion.image" class="img">
		</div>
	</div>
</template>

<script>
import { formatNumberToDecimal } from '../../utils/utils';
export default {
	name: 'PromotionsComponent',
	props: {
		promotion: {
			type: Object,
			required: true
		}
	},
	methods: {
		priceFormated(price) {
			return  formatNumberToDecimal(price, 0, 0);
		}
	}
};
</script>

<style lang="scss" scoped>
.container {
	background: var(--main-variant);
	background: linear-gradient(153deg, var(--main-variant) 79%, rgba(255,255,255,1) 100%);
	border-radius: 20px;
	height: 120px;
	display: flex;
	max-width: 300px;
	margin: 0px 10px 0px 10px;
	&:hover {
		cursor: pointer;
	}
	.information {
		width: 65%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		.title {
			font-size: 20px;
			font-weight: bold;
			text-align: center;
		}
		.price {
			font-size: 20px;
			font-weight: bold;
		}
	}
	.image {
		width: 35%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		object-fit: contain;
		.img {
			object-fit: contain;
		}
	}
}
</style>