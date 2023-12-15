<template>
	<Button 
		icon="pi pi-whatsapp"
		:label="label" 
		class="button"
	/>
</template>

<script>
export default {
	props: {
		label: {
			type: String,
			required: true
		}
	}
};
</script>

<style lang="scss" scoped>
.button {
	background-color: transparent;
	color: var(--whatsapp-color);
	border: 1px solid var(--whatsapp-color);
	border-radius: 20px;
}

</style>