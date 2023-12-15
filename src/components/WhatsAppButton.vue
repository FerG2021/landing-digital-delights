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
/*  */
/* MOBILE */
/*  */
@media all and (max-width: 960px) {
	.button {
		background-color: transparent;
		color: var(--whatsapp-color);
		border: 1px solid var(--whatsapp-color);
		border-radius: 20px;
	}
}


/*  */
/* WEB */
/*  */
@media all and (min-width: 961px) {
	.button {
		background-color: transparent;
		color: var(--whatsapp-color);
		border: 1px solid var(--whatsapp-color);
		border-radius: 20px;
		&:hover {
			background-color: var(--whatsapp-color);
			color: var(--contrast);
		}
	}
}


</style>