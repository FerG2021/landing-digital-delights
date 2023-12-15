<template>
	<div class="shopping-resume-container">
		<div class="subtotal-container">
			<div class="subtotal-legend">
				Subtotal
			</div>
			<div class="subtotal-mount">
				$ {{ formatNumber(total) }}
			</div>
		</div>
		<div class="confirm-container">
			<IconButton 
				:label="$t('continue')"
				:icon="'pi-check'"
				@click="clickContinueButton()"
			/>
		</div>
	</div>

	<Sidebar 
		v-model:visible="open" 
		position="bottom" 
		style="height: auto"				
	>
		<BottomSheetResume 
			:product-selected="productSelected"
		/>
	</Sidebar>
</template>

<script>
import { mapGetters } from 'vuex';

import { formatNumberToDecimal } from '../../utils/utils';
import IconButton from '../../components/IconButton.vue';
import BottomSheetResume from '../../components/BottomSheetResume.vue';

export default {
	components: {  IconButton, BottomSheetResume },
	data() {
		return {
			open: false
		};
	},
	computed: {
		...mapGetters('ShoppingCartStore', ['total'])
	},
	methods: {
		formatNumber(price) {
			return formatNumberToDecimal(price);
		},
		clickContinueButton() {
			this.open = true;
		}
	},
};
</script>

<style lang="scss" scoped>
.shopping-resume-container {
	height: 100%;
	padding: 10px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	.subtotal-container {
		display: flex;
		.subtotal-legend {
			width: 50%;
			font-size: 20px;
			font-weight: 600;
		}
		.subtotal-mount {
			width: 50%;
			text-align: end;
			font-size: 20px;
			font-weight: 600;
			color: var(--main);
		}
	}
	.confirm-container {
		width: 100%;
		display: flex;
		justify-content: center;
	}
}
</style>