<template>
	<div class="container">
		<div class="image">
			<img :src="productSelected.image" class="img">
		</div>
		<div class="information">
			<div class="name">
				{{ productSelected.name ? productSelected.name : productSelected.title }}
			</div>
			<div class="price">
				$ {{ formatPrice(productSelected.price) }}
			</div>
			<div class="description">
				{{ productSelected.description }}
			</div>
		</div>
		<div class="contact">
			<WhatsAppButton 
				class="button-contact"
				@click="goToWhatsApp()"
				v-if="productSelected.stock === 1 || productSelected.available === 1"
			/>
			<div v-else class="not-available-product">
				<div class="legend">
					{{ $t('notAvailableProduct') }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { formatNumberToDecimal } from '../utils/utils';
import WhatsAppButton from './WhatsAppButton.vue';

export default {
	components: { WhatsAppButton },
	props: {
		productSelected: {
			type: Object,
			required: true
		},
		open: {
			type: Boolean,
			required: false,
			default: false
		}
	},
	methods: {
		formatPrice(price) {
			return formatNumberToDecimal(price, 0, 0);
		},
		async goToWhatsApp() {
			const message = `¡Hola Bunker! \n Me comunico para consultarte acerca de tu prducto: ${this.getNameProduct()} \n ¡¡¡Saludos!!!`;

			const url = encodeURI(
				'https://wa.me/' + 5493843401553 + '?text=' + message
			);

			window.open(url, '_blank');
		},
		getNameProduct() {
			return this.productSelected.name ? this.productSelected.name : this.productSelected.title;
		}
	}
};
</script>

<style lang="scss" scoped>
.container {
	.image {
		background-color: var(--background-product-color);
		display: flex;
		flex-direction: column;
		align-items: center;
		.img {
			height: 220px;
			width: 220px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			object-fit: contain;
		}
	}
	.information {
		padding: 10px;
		.name {
			font-size: 25px;
			font-weight: bold;
		}
		.price {
			margin-top: 10px;
			font-size: 20px;
			color: var(--main-variant);
			font-weight: bold;
		}
		.description {
			margin-top: 10px;
			text-align: center;
		}
	}
	.contact {
		margin-top: 10px;
		margin-bottom: 20px;
		display: flex;
		flex-direction: column;
		align-items: center;
		.button-contact {
			width: 50%;
			border-radius: 8px;
		}
		.not-available-product {
			color: var(--not-found);
			font-size: 18px;
			font-weight: bold;
			text-align: center;
			border: 1px solid var(--not-found);
			border-radius: 8px;
			.legend {
				padding: 5px;
			}

		}
	}
}

</style>