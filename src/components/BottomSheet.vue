<template>
	<div class="container">
		<div class="section-container">
			<div class="image">
				<Image 
					:src="productSelected.image" 
					alt="Image" 
					class="img" 
					preview 
				/>
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
					v-if="productSelected.stock === 1 || productSelected.available === 1"
					class="contact-button"
					:label="$t('consult')"
					@click="goToWhatsApp()"
				/>
				<AddProduct 
					v-if="productSelected.stock === 1 || productSelected.available === 1"
					:product="productSelected"
					class="add-button"
				/>
				<div v-else class="not-available-product">
					<div class="legend">
						{{ $t('notAvailableProduct') }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { formatNumberToDecimal } from '../utils/utils';
import WhatsAppButton from './WhatsAppButton.vue';
import AddProduct from './AddProductButton.vue';

export default {
	components: { AddProduct, WhatsAppButton },
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
			return formatNumberToDecimal(price);
		},
		async goToWhatsApp() {
			const message = `¡Hola Burguer Bliss! \n Me comunico para consultarte acerca de tu prducto: ${this.getNameProduct()} \n ¡¡¡Saludos!!!`;

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
/*  */
/* MOBILE */
/*  */
@media all and (max-width: 960px) {
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
			.contact-button {
				width: 70%;
				margin-bottom: 10px;
			}
			.add-button {
				width: 70%;
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
}


/*  */
/* WEB */
/*  */
@media all and (min-width: 961px) {
	.container {
		display: flex;
		align-items: center;
		justify-content: center;
		.section-container {
			width: 50%;
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
				.contact-button {
					width: 50%;
					margin-bottom: 10px;
				}
				.add-button {
					width: 50%;
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
	}
}


</style>