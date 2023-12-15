<template>
	<Button 
		:icon="getIcon"
		:label="label" 
		class="button"
	/>
</template>

<script>
export default {
	props: {
		icon: {
			type: String,
			required: true
		},
		label: {
			type: String,
			required: true
		}
	},
	computed: {
		getIcon() {
			return `pi ${this.icon}`;
		}
	}
};
</script>

<style lang="scss" scoped>
.button {
	background-color: transparent;
	color: var(--main);
	border: 1px solid var(--main);
	border-radius: 8px;
}

</style>