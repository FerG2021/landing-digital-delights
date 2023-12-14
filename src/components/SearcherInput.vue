<template>
	<span class="p-input-icon-left">
		<i class="pi pi-search" />
		<InputText 
			v-model="searcher" 
			placeholder="Buscar" 
			class="searcher"
			@input="changeSearcherInput()"
			showClear
		/>
	</span>
</template>

<script>
export default {
	data() {
		return {
			searcher: null
		};
	},
	methods: {
		changeSearcherInput() {
			this.$emit('changeSearcherInput', this.searcher);
		}
	},
};
</script>

<style lang="scss" scoped>
.searcher {
	border-radius: 40px;
	width: 100%;
}

</style>