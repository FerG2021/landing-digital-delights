<template>
	<div class="container-delivery-info">
		<div class="details-container">
			<div class="details-title">
				{{  $t('detailsTitle') }}
			</div>
			<div class="name">
				<span class="p-float-label">
					<InputText 
						id="name"
						v-model="name" 
						class="input-name"
					/>
					<label for="name">
						Nombre 
						<span class="required">*</span>
					</label>
				</span>
			</div>
			<div class="payment">
				<div class="p-float-label">
					<Dropdown 
						v-model="paymentForm" 
						:options="paymentFormOptions" 
						optionLabel="label"
						inputId="dd-city" 
						class="w-full md:w-14rem payment-select" 
					/>
					<label 
						for="dd-city"
					>
						Seleccioná un método de pago
						<span class="required">*</span>
					</label>
				</div>
			</div>
			<div class="delivery">
				<div class="p-float-label">
					<Dropdown 
						v-model="deliveryForm" 
						:options="deliveryFormOptions" 
						optionLabel="label"
						inputId="dd-city" 
						class="w-full md:w-14rem delivery-select" 
					/>
					<label 
						for="dd-city"
					>
						Seleccioná la forma de envío
						<span class="required">*</span>
					</label>
				</div>
			</div>
			<div 
				class="address"
				v-if="showInputAddress()"
			>
				<span 
					class="p-float-label"
				>
					<InputText 
						id="address"
						v-model="address" 
						class="input-name"
					/>
					<label for="address">
						Ingresá la dirección
						<span class="required">*</span>
					</label>
				</span>
			</div>
			<div class="additional-info">
				<span class="p-float-label">
					<Textarea 
						v-model="observations" 
						rows="5" 
						cols="30" 
						class="observations-input"
					/>
					<label>
						Observaciones
					</label>
				</span>
			</div>
			<div class="confirm">
				<WhatsAppButton
					:label="$t('send')"
					class="confirm-button"
					@click="clickSend()"
				/>
			</div>
		</div>

		<Toast />
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import { formatNumberToDecimal } from '../utils/utils';

import WhatsAppButton from './WhatsAppButton.vue';

export default {
	components: { WhatsAppButton },
	props: {
		open: {
			type: Boolean,
			required: false,
			default: false
		}
	},
	computed: {
		...mapGetters('ShoppingCartStore', ['list', 'total'])
	},
	data() {
		return {
			name: null,
			paymentForm: null,
			paymentFormOptions: [
				{ label: 'Efectivo', value: 'cash' },
				{ label: 'Transferencia', value: 'transfer' }
			],
			deliveryForm: null,
			deliveryFormOptions: [
				{ label: 'Lo retiro del local', value: 'lookfor' },
				{ label: 'Quiero que me lo envíen', value: 'delivery' }
			],
			address: null,
			observations: null
		};
	},
	methods: {
		formatPrice(price) {
			return formatNumberToDecimal(price, 0, 0);
		},
		async sendWhatsAppMessage() {
			
			let message = '¡Hola Burguer Blist! 👋 Quisiera hacerte el siguiente pedido:\n';


			message = message + `${this.getListProducts()} \n`;
			message = message + `Por un total de $${this.formatPrice(this.total)} \n`;
			message = message + '\nEstos son mis datos: \n';
			message = message + `${this.getData()}`;
			message = message + '\n¡¡¡Saludos!!!';

			const url = encodeURI(
				'https://wa.me/' + 5493843401553 + '?text=' + message
			);

			window.open(url, '_blank');
		},
		getListProducts() {
			let listProducts = '';

			for (const item of this.list) {
				listProducts = listProducts + `👉 *${item.name}* - ${item.cant} x $${this.formatPrice(item.price)} = *$${this.formatPrice(item.subtotal)}* \n`;
			}

			return listProducts;
		},
		getData() {	
			let message = '';
			message = message + `👤 Nombre: *${this.name}* \n💸 Método de pago: *${this.paymentForm.label}* \n🛵 Forma de envío: *${this.deliveryForm.label}* \n`;

			if (this.deliveryForm.value === 'delivery') {
				message = message + `🧭 Dirección: *${this.address}* \n`;
			}

			if (this.observations !== null && this.observations !== '') {
				message = message + `🧐 Observaciones: *${this.observations}* \n`;
			}

			return message;
		},
		clickSend() {
			if (this.getStatusFiels()) {
				this.sendWhatsAppMessage();
			} else {
				this.$toast.add({
					severity: 'error', 
					summary: 'Mensaje de error', 
					detail: 'Se deben completar los campos requeridos', 
					life: 3000 
				});
			}
			
		},
		getStatusFiels() { 
			return (this.name !== null && this.name !== '') && (this.paymentForm !== null) && ((this.deliveryForm?.value === 'delivery' && this.address !== null && this.address !== '') || (this.deliveryForm?.value === 'lookfor' && (this.address === null || this.address === '')));
		},
		showInputAddress() {
			if (this.deliveryForm?.value === 'delivery') {
				return true;
			} else {
				this.address = null;
				return false;
			}
		}
	}
};
</script>

<style lang="scss" scoped>
/*  */
/* MOBILE */
/*  */
@media all and (max-width: 960px) {
	.container-delivery-info {
		.details-title {
			padding: 25px;
			width: 100%;
			text-align: center;
			font-size: 20px;
			font-weight: 600;
		}
		.name {
			padding: 25px;
			width: 100%;
			.input-name {
				width: 100%;
			}
			.required {
				color: var(--not-found);
			}
		}
		.payment {
			padding: 25px;
			width: 100%;
			.payment-select {
				width: 100%;
			}
			.required {
				color: var(--not-found);
			}
		}
		.delivery {
			padding: 25px;
			width: 100%;
			.delivery-select {
				width: 100%;
			}
			.required {
				color: var(--not-found);
			}
		}
		.address { 
			padding: 25px;
			width: 100%;
			.input-name {
				width: 100%;
			}
			.required {
				color: var(--not-found);
			}
		}
		.additional-info {
			padding: 25px;
			width: 100%;
			.observactions-input { 
				width: 100%;
			}
		}
		.confirm {
			padding: 25px;
			width: 100%;
			.confirm-button { 
				width: 100%;
			}
		}
	}
}

/*  */
/* WEB */
/*  */
@media all and (min-width: 961px) {
	.container-delivery-info {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		.details-container {
			width: 50%;
			.details-title {
				padding: 25px;
				width: 100%;
				text-align: center;
				font-size: 20px;
				font-weight: 600;
			}
			.name {
				padding: 25px;
				width: 100%;
				.input-name {
					width: 100%;
				}
				.required {
					color: var(--not-found);
				}
			}
			.payment {
				padding: 25px;
				width: 100%;
				.payment-select {
					width: 100%;
				}
				.required {
					color: var(--not-found);
				}
			}
			.delivery {
				padding: 25px;
				width: 100%;
				.delivery-select {
					width: 100%;
				}
				.required {
					color: var(--not-found);
				}
			}
			.address { 
				padding: 25px;
				width: 100%;
				.input-name {
					width: 100%;
				}
				.required {
					color: var(--not-found);
				}
			}
			.additional-info {
				padding: 25px;
				width: 100%;
				.observactions-input { 
					width: 100%;
				}
			}
			.confirm {
				padding: 25px;
				width: 100%;
				.confirm-button { 
					width: 100%;
				}
			}
		}
	}
}
</style>